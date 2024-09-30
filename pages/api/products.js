import connectToDatabase from '../../lib/mongodb';
import Product from '../../models/Product';

export default async function handler(req, res) {
  const { method } = req;

  // Connect to the database
  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to fetch products' });
      }
      break;

    case 'POST':
      try {
        console.log('requestbody',req.body);
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, data: product });
      } catch (error) { 
        console.error('Failed to Create Product',error);
        res.status(400).json({ success: false, message: 'Failed to create product' });
      }
      break;

    case 'PUT':
      try {
        const { id } = req.query;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
          return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, data: updatedProduct });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to update product' });
      }
      break;

      case 'DELETE':
        try {
          const { id } = req.query; // This retrieves the ID from the query string
          const deletedProduct = await Product.findByIdAndDelete(id); // Deletes the product by ID
          if (!deletedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
          }
          res.status(200).json({ success: true, data: deletedProduct });
        } catch (error) {
          res.status(400).json({ success: false, message: 'Failed to delete product' });
        }
        break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}