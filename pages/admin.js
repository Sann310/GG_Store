import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',  // Keep as string for input but convert later
    description: '',
    stockQuantity: '',  // Keep as string for input but convert later
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data.data);
    };
    fetchProducts();
  }, []);

  // Handler for adding a new product
  const handleAddProduct = async () => {
    try {
      const productData = {
        ...newProduct,
        price: Number(newProduct.price),  // Convert to number
        stockQuantity: Number(newProduct.stockQuantity),  // Convert to number
      };

      const response = await axios.post('/api/products', productData);
      if (response.data.success) {
        setProducts([...products, response.data.data]);
        setNewProduct({
          name: '',
          price: '',
          description: '',
          stockQuantity: '',
        });
        alert('Product added successfully!');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Handler for updating a product
  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await axios.put(`/api/products/${id}`, updatedData);
      if (response.data.success) {
        alert('Product updated successfully!');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Handler for deleting a product
const handleDelete = async (id) => {
    console.log("Deleting product with ID:", id); // Log the ID for debugging
    try {
      const response = await axios.delete(`/api/products/${id}`);
      if (response.data.success) {
        setProducts(products.filter(product => product._id !== id));
        alert('Product deleted successfully!');
      } else {
        alert(response.data.message); // Alert the message if the deletion fails
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('An error occurred while deleting the product.'); // Alert on error
    }
  };
  // Handler for input changes in the new product form
  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Add New Product Section */}
      <div className="product-form">
        <h2>Add New Product</h2>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="stockQuantity"
          value={newProduct.stockQuantity}
          onChange={handleInputChange}
          placeholder="Stock Quantity"
        />
        <button onClick={handleAddProduct} className="add-product-btn">Add Product</button>
      </div>

      {/* Product List Section */}
      <h2>Manage Products</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: {product.price} THB</p>
            <p>{product.description}</p>
            <p>Stock Quantity: {product.stockQuantity}</p>
            <button onClick={() => handleUpdate(product._id, { /* Add updated data here */ })} className="update-btn">Update</button>
            <button onClick={() => handleDelete(product._id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>

      {/* Styling */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .admin-dashboard {
          background-color: #1b1b1b; /* Dark gaming background */
          color: #fff; /* Bright text for readability */
          font-family: 'Press Start 2P', cursive; /* Gaming-themed font */
          padding: 20px;
          text-align: center;
        }

        h1, h2 {
          color: #0ff;
        }

        .product-form {
          margin-bottom: 30px;
        }

        .product-form input {
          display: block;
          margin: 10px auto;
          padding: 10px;
          width: 50%;
          background-color: #333;
          color: #0ff;
          border: 2px solid #0ff;
        }

        .add-product-btn {
          background-color: #0ff;
          color: #000;
          padding: 10px 15px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .add-product-btn:hover {
          background-color: #fff;
        }

        .product-list {
          list-style-type: none;
          padding: 0;
        }

        .product-item {
          background-color: #2a2a2a;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 10px;
          transition: transform 0.3s;
          border: 2px solid #0ff;
        }

        .product-item:hover {
          transform: translateY(-10px);
        }

        .update-btn, .delete-btn {
          background-color: #0ff;
          color: #000;
          padding: 10px 15px;
          margin: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .update-btn:hover, .delete-btn:hover {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;