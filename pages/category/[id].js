import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const CategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (id) {
      console.log('Fetching products for category ID:', id); // Log the category ID
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`/api/products?categoryId=${id}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      fetchProducts();
    }
  }, [id]);

  return (
    <div>
      <h1>Category: {id}</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageURL} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;