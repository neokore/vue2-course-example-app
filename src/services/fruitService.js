import apiClient from './apiClient';

export const getFruits = () => apiClient.get('/fruits');
export const getFruitById = (id) => apiClient.get(`/fruits/${id}`);
export const createFruit = (fruit) => apiClient.post(`/fruits`, fruit);
export const deleteFruit = (id) => apiClient.delete(`/fruits/${id}`);
