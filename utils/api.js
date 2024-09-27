import axios from 'axios';

export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`/api/products/${id}`);
    console.log('Product data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`/api/products?category=${category}`);
    console.log('Products data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};