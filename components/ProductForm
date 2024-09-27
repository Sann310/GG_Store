import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    imageURL: '',
    categoryId: '',
    stockQuantity: '',
    createdAt: '',
    updatedAt: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ ...product, id: Date.now(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    setProduct({
      id: '',
      name: '',
      description: '',
      price: '',
      imageURL: '',
      categoryId: '',
      stockQuantity: '',
      createdAt: '',
      updatedAt: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <input type="text" name="imageURL" value={product.imageURL} onChange={handleChange} placeholder="Image URL" required />
      <input type="text" name="categoryId" value={product.categoryId} onChange={handleChange} placeholder="Category ID" required />
      <input type="number" name="stockQuantity" value={product.stockQuantity} onChange={handleChange} placeholder="Stock Quantity" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;