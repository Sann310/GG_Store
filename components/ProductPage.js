import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProduct } from '../utils/api';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        setLoading(true); // Set loading to true before making the request
        try {
          const productData = await fetchProduct(id);
          setProduct(productData);
        } catch (error) {
          console.error('Error fetching product:', error);
          setError(error);
        } finally {
          setLoading(false); // Set loading to false after the request completes
        }
      };

      getProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
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
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.imageURL} alt={product.name} />
    </div>
  );
};

export default ProductPage;