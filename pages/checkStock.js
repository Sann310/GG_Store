import { useState, useEffect } from 'react';
import axios from 'axios';

const CheckStock = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Check Stock</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h3>{product.name}</h3>
              <p>Stock Quantity: {product.stockQuantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CheckStock;