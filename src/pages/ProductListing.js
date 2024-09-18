import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductListing = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
