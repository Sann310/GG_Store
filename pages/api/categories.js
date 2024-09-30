import connectToDatabase from '../../lib/mongodb';
import Category from '../../models/Category';

export default async function handler(req, res) {
  await connectToDatabase(); // Connect to MongoDB

  switch (req.method) {
    case 'GET':
      try {
        const categories = await Category.find({}); // Fetch all categories
        res.status(200).json({ success: true, data: categories });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to fetch categories' });
      }
      break;

    case 'POST':
      try {
        const { name, description } = req.body; // Get name and description from the request body

        if (!name || !description) {
          return res.status(400).json({ success: false, message: 'Name and description are required' });
        }

        const category = new Category({ name, description }); // Create a new category
        await category.save();
        res.status(201).json({ success: true, data: category });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to create category' });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}