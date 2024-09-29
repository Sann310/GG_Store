import { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <h3>{order.name}</h3>
          <p>Address: {order.address}</p>
          <p>Total Amount: {order.totalAmount} ฿</p>
          <h4>Items:</h4>
          <ul>
            {order.items.map((item) => (
              <li key={item._id}>{item.name} - {item.price} ฿</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Orders;