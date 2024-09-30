import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // Directly compare the plain text password
        if (!user || user.password !== password) {
          return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Successful login without JWT
        res.status(200).json({ success: true, message: 'Login successful' });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Login failed' });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}