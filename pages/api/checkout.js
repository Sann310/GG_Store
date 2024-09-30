import connectToDatabase from '../../lib/mongodb';
import Order from '../../models/Order';
import Cart from '../../models/Cart';
import Product from '../../models/Product';
import User from '../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const { userId, shippingAddress } = req.body;
        
        // Fetch the user's cart
        const userCart = await Cart.findOne({ userId }).populate('items.productId');
        if (!userCart || userCart.items.length === 0) {
          return res.status(400).json({ success: false, message: 'Cart is empty' });
        }

        // Calculate total price
        const totalPrice = userCart.items.reduce((total, item) => {
          return total + item.productId.price * item.quantity;
        }, 0);

        // Create a new order
        const newOrder = new Order({
          userId,
          items: userCart.items,
          totalPrice,
          shippingAddress,
        });

        // Save the order
        await newOrder.save();

        // Clear the cart
        userCart.items = [];
        await userCart.save();

        res.status(201).json({ success: true, message: 'Order placed successfully', data: newOrder });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to process order' });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}