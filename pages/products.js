import Layout from '../components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data.data);
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} ฿
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Products;