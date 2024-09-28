import connectToDatabase from '../../lib/mongodb';
import Product from '../../models/Product';

export default async function handler(req, res) {
  const { method } = req;

  // Connect to the database
  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        // Fetch all products from the database
        const products = await Product.find({});

        // Format each product's price with Baht symbol (฿)
        const formattedProducts = products.map(product => {
          return {
            ...product._doc,
            price: `${product.price} ฿`, // Format price with the Baht symbol
          };
        });

        // Return the formatted product data
        res.status(200).json({ success: true, data: formattedProducts });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to fetch products' });
      }
      break;

    case 'POST':
      try {
        const product = await Product.create(req.body);
        res.status(201).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to create product' });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}