import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/AddDelete.module.css';

export default function AddDelete() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
    stockQuantity: '',
    categoryId: ''
  });

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch categories for dropdown
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data.data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }
    fetchCategories();
  }, []);

  // Fetch products for delete section
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newFormData = new FormData();
    newFormData.append('name', formData.name);
    newFormData.append('price', formData.price);
    newFormData.append('description', formData.description);
    newFormData.append('image', formData.image); // The image should be uploaded properly
    newFormData.append('stockQuantity', formData.stockQuantity);
    newFormData.append('categoryId', formData.categoryId);
  
    try {
      const response = await axios.post('/api/products', newFormData, {
        headers: { 'Content-Type': 'multipart/form-data' }, // Make sure this header is correct
      });
      alert('Product added successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Failed to add product:', error);
      alert('Failed to add product: ' + error.response?.data?.message);
    }
  };
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/products?id=${productId}`);
      alert('Product deleted successfully!');
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Item</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Item Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className={styles.inputGroup}>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
        </div>
        <div className={styles.inputGroup}>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
        </div>
        <div className={styles.inputGroup}>
          <label>Stock Quantity:</label>
          <input type="number" name="stockQuantity" value={formData.stockQuantity} onChange={handleInputChange} />
        </div>
        <div className={styles.inputGroup}>
          <label>Upload Image:</label>
          <input type="file" name="image" onChange={handleFileChange} required />
        </div>
        <div className={styles.inputGroup}>
          <label>Select Category:</label>
          <select name="categoryId" value={formData.categoryId} onChange={handleInputChange} required>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Add Item</button>
      </form>

      <div className={styles.deleteSection}>
        <h2 className={styles.heading}>Delete Items</h2>
        <div className={styles.productsList}>
          {products.map((product) => (
            <div key={product._id} className={styles.productCard}>
              <img src={product.imageURL} alt={product.name} className={styles.productImage} />
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>Price: {product.price} ฿</p>
                <p>{product.description}</p>
                <p>Stock: {product.stockQuantity}</p>
              </div>
              <button onClick={() => handleDelete(product._id)} className={styles.deleteButton}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.backButton} onClick={() => window.history.back()}>Back</button>
    </div>
  );
}