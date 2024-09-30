import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Assuming Navbar is already implemented

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="main-container">
      {/* Welcome Message */}
      <h1 className="welcome">Welcome to GG Store</h1>

      {/* Navigation Boxes */}
      <div className="navigation-boxes">
        <Link href="/admin" className="nav-box">Admin Dashboard</Link>
        <Link href="/cart" className="nav-box">Cart</Link>
        <Link href="/checkout" className="nav-box">Checkout</Link>
        <Link href="/orders" className="nav-box">Orders</Link>
      </div>

      {/* Product Listing */}
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.imageURL} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: {product.price} THB</p>
            <p>{product.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Styling */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .main-container {
          background-color: #1b1b1b; /* Dark background for gaming theme */
          color: #fff; /* Bright text */
          font-family: 'Press Start 2P', cursive; /* Gaming-themed font */
          padding: 20px;
          text-align: center;
        }

        .welcome {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .navigation-boxes {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .nav-box {
          background-color: #333;
          padding: 15px 30px;
          text-decoration: none;
          color: #0ff; /* Neon color for buttons */
          border: 2px solid #0ff;
          transition: background-color 0.3s, transform 0.3s;
          cursor: pointer;
        }

        .nav-box:hover {
          background-color: #0ff;
          color: #000;
          transform: scale(1.1); /* Enlarge the button slightly on hover */
        }

        .product-list {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 products in a row */
          gap: 30px;
          justify-items: center;
        }

        .product-card {
          background-color: #2a2a2a;
          border-radius: 10px;
          padding: 20px;
          width: 200px;
          text-align: center;
          transition: transform 0.3s;
        }

        .product-card:hover {
          transform: translateY(-10px); /* Slight lift on hover */
        }

        .product-image {
          width: 100%;
          margin-bottom: 15px;
        }

        .add-to-cart {
          background-color: #0ff;
          color: #000;
          padding: 10px 15px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .add-to-cart:hover {
          background-color: #fff;
        }
      `}</style>
    </div>
  );
}