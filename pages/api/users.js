import connectToDatabase from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  await connectToDatabase();

  const { method } = req;

  switch (method) {
    case 'POST': {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'Please fill in all fields' });
      }

      try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Create a new user without password hashing
        const newUser = new User({
          username,
          email,
          password
        });

        await newUser.save();

        res.status(201).json({
          success: true,
          data: {
            username: newUser.username,
            email: newUser.email
          }
        });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
      }
      break;
    }

    case 'GET': {
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to fetch users' });
      }
      break;
    }

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}