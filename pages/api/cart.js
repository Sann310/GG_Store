import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User';
import Product from '../../models/Product';

export default async function handler(req, res) {
  await connectToDatabase();
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const { userId } = req.query;
        if (!userId) {
          return res.status(400).json({ success: false, message: 'User ID is required' });
        }
        const foundUser = await User.findById(userId).populate('cart');
        res.status(200).json({ success: true, data: foundUser.cart });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to get cart items' });
      }
      break;

    case 'POST':  // Adding an item to the cart
      try {
        const { userId, productId, quantity } = req.body;
        if (!userId || !productId || !quantity) {
          return res.status(400).json({ success: false, message: 'User ID, Product ID, and quantity are required' });
        }

        const product = await Product.findById(productId);
        if (!product) {
          return res.status(404).json({ success: false, message: 'Product not found' });
        }

        const foundUser = await User.findById(userId);
        const itemExists = foundUser.cart.find(item => item.product.toString() === productId);

        if (itemExists) {
          itemExists.quantity += quantity; // Update quantity if the product is already in the cart
        } else {
          foundUser.cart.push({ product: productId, quantity });
        }

        await foundUser.save();
        res.status(200).json({ success: true, message: 'Product added to cart', data: foundUser.cart });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to add product to cart' });
      }
      break;

    case 'DELETE':  // Remove an item from the cart
      try {
        const { userId, productId } = req.body;
        if (!userId || !productId) {
          return res.status(400).json({ success: false, message: 'User ID and Product ID are required' });
        }

        const foundUser = await User.findById(userId);
        foundUser.cart = foundUser.cart.filter(item => item.product.toString() !== productId);

        await foundUser.save();
        res.status(200).json({ success: true, message: 'Product removed from cart', data: foundUser.cart });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to remove product from cart' });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}