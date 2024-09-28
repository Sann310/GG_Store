import React from 'react';
import ProductList from '../components/ProductList';
import { ProductProvider } from '../context/ProductContext';

const ProductsPage = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
};

export default ProductsPage;