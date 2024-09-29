// pages/api/orders.js

import connectToDatabase from '../../lib/mongodb';
import Order from '../../models/Order';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'POST':
      try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ success: true, data: order });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to place order' });
      }
      break;

    case 'GET':
      try {
        const orders = await Order.find({});
        res.status(200).json({ success: true, data: orders });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to fetch orders' });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}