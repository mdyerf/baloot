import images from '../res/images';

export const commodities = [
  {
    id: 1,
    title: 'Phone',
    remaining: 0,
    pic: images.image.product,
    price: 100,
  },
  {
    id: 2,
    title: 'Phone 2',
    remaining: 2,
    pic: images.image.product,
    price: 100,
  },
  {
    id: 3,
    title: 'Phone 3',
    remaining: 2,
    pic: images.image.product,
    price: 100,
  },
];

export const product = {
  id: 1,
  title: 'Huawei nova 9',
  provider: 'Huawei',
  providerId: 1,
  categories: ['IT', 'Technology'],
  price: 300,
  remaining: 5,
  rate: 4.1,
  rateNums: 12,
  comments: [
    {
      id: 1,
      date: '2023/10/01',
      user: 'seyed',
      text: 'Hey nigga',
      likes: 5,
      dislikes: 2,
    },
    {
      id: 2,
      date: '2023/10/03',
      user: 'sadat',
      text: 'Goodbye nigga',
      likes: 2,
      dislikes: 9,
    },
  ],
  suggestions: [
    {
      id: 1,
      title: 'Phone',
      remaining: 0,
      pic: images.image.product,
      price: 100,
    },
  ],
};

export const provider = {
  pic: images.image.provider,
  title: 'Huawei',
  since: '1990',
  commodities,
};
