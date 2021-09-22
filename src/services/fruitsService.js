import fruits from './mocks/fruits.json';

export const getFruits = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fruits);
    }, 1000);
  });
};
