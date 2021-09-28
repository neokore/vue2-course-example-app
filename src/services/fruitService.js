import apiClient from './apiClient';

export const getFruits = () => apiClient.get('/en/fruits');
export const getFruitById = (id) => apiClient.get(`/en/fruits/${id}`);
export const createFruit = (fruit) => apiClient.post(`/en/fruits`, fruit);
export const deleteFruit = (id) => apiClient.delete(`/en/fruits/${id}`);
