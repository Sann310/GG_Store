import connectToDatabase from '../../lib/mongodb';
import Admin from '../../models/Admin';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'POST': // Handle admin login
      const { email, password } = req.body;

      try {
        // Find the admin by email
        const admin = await Admin.findOne({ email });

        if (!admin) {
          return res.status(400).json({ success: false, message: 'Admin not found' });
        }

        // Check if the password matches
        const isMatch = await admin.comparePassword(password);

        if (!isMatch) {
          return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // If passwords match, return a success response
        res.status(200).json({ success: true, message: 'Login successful', admin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}