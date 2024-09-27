import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageURL} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link href={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;