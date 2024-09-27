import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProduct } from '../../utils/api';
import styles from '../../styles/ProductPage.module.css';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        setLoading(true);
        try {
          const productData = await fetchProduct(id);
          setProduct(productData);
        } catch (error) {
          console.error('Error fetching product:', error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      getProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error loading product</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{product.name}</h1>
      </header>
      <div className={styles.product}>
        <img src={product.imageURL} alt={product.name} />
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <div className={styles.productDescription}>
          <p>{product.description}</p>
        </div>
        <div className={styles.additionalInfo}>
          <p><strong>Category ID:</strong> {product.categoryId}</p>
          <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
          <p><strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(product.updatedAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;