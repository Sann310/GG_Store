import axios from 'axios';

const api = axios.create({
  baseURL: 'http://your-api-url.com',
});

export const getProducts = () => api.get('/products');
export const getProductById = (id) => api.get(`/products/${id}`);
export const getCategories = () => api.get('/categories');
export const getUser = (id) => api.get(`/users/${id}`); 
