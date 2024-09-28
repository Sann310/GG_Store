import connectToDatabase from '../../lib/mongodb';
import Admin from '../../models/Admin';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const admins = await Admin.find({});
        res.status(200).json({ success: true, data: admins });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const admin = await Admin.create(req.body);
        res.status(201).json({ success: true, data: admin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}