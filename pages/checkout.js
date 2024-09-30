import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function Checkout() {
  const [shippingAddress, setShippingAddress] = useState('');

  const handleCheckout = async () => {
    const response = await axios.post('/api/checkout', {
      userId: '<your_user_id>', // replace with actual user ID
      shippingAddress,
    });
    // Handle order confirmation
  };

  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>
      <input
        type="text"
        placeholder="Shipping Address"
        value={shippingAddress}
        onChange={(e) => setShippingAddress(e.target.value)}
      />
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
}