import fruitMock from './mocks/fruit';

export const getFruits = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fruitMock);
    }, 1000);
  });
};
