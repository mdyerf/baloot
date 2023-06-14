FROM node:20.3.0-bullseye AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
RUN npm run build
CMD ["npm", "start"]

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker build -t frontend . 
# docker run -it --rm -v %cd%:/app -v /app/node_modules -p 80:80 frontend 