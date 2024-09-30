import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await axios.get('/api/cart'); // Update with your cart API endpoint
      setCartItems(response.data.data);
    };
    fetchCart();
  }, []);

  const handleRemoveFromCart = async (productId) => {
    await axios.delete('/api/cart', { data: { productId } });
    // Refresh cart after removal
    const response = await axios.get('/api/cart');
    setCartItems(response.data.data);
  };

  return (
    <div>
      <Navbar />
      <h1>Your Cart</h1>
      <div>
        {cartItems.map(item => (
          <div key={item.productId}>
            <h2>{item.productId.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={() => {/* Navigate to checkout */}}>Checkout</button>
    </div>
  );
}