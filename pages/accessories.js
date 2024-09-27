import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../utils/api';
import styles from '../styles/AccessoriesPage.module.css';

const AccessoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const productsData = await fetchProductsByCategory('accessories');
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error loading products</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Accessories</h1>
      </header>
      <div className={styles.products}>
        {products.map(product => (
          <div key={product.id} className={styles.product}>
            <img src={product.imageURL} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;