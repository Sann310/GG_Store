import { useState, useEffect } from 'react';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleSubmit = async () => {
    const order = {
      name,
      address,
      totalAmount,
      items: cartItems,
    };

    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
      alert('Order placed successfully!');
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Failed to place order:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total Amount: {totalAmount} ฿</p>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Address: </label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Finish Order</button>
    </div>
  );
};

export default Checkout;