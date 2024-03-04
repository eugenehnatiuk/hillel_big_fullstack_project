const pizzaUrl =
  'https://www.allrecipes.com/thmb/ooZbu_yUBrGQ74uKbuOENWuNxMM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg';

const pizzaList = [
  {
    id: '12345',
    title: 'Margarita',
    url: pizzaUrl,
    price: 300,
    isAvaible: true,
  },
  {
    id: '56789',
    title: 'Diavole',
    url: pizzaUrl,
    price: 400,
    isAvaible: true,
  },
  {
    id: '101112',
    title: 'Peperoni',
    url: pizzaUrl,
    price: 450,
    isAvaible: true,
  },
  {
    id: '131415',
    title: 'Hawai',
    url: pizzaUrl,
    price: 370,
    isAvaible: false,
  },
];

const pizzaSizes = [
  {
    id: 'id-s',
    title: 'Small (30cm)',
  },
  {
    id: 'id-b',
    title: 'Big (50cm)',
  },
];

export { pizzaList, pizzaSizes };
