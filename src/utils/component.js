export const getClassname = (name, props, className) =>
  `${name} ` +
  Object.keys(props)
    .map((k) => `${name}--${k}-${props[k]}`)
    .join(" ") +
  ` ${className}`;
