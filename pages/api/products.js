import multer from 'multer';
import connectToDatabase from '../../lib/mongodb';
import Product from '../../models/Product';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Directory to save uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Filename with timestamp to avoid conflicts
  }
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing, multer will handle it
  },
};

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).json({ success: false, message: 'Failed to fetch products' });
      }
      break;

    case 'POST':
      upload.single('image')(req, res, async function (err) {
        if (err) {
          console.error('Image upload error:', err);
          return res.status(400).json({ success: false, message: 'Image upload failed' });
        }

        try {
          const { name, price, description, stockQuantity, categoryId } = req.body;

          if (!name || !price || !description || !stockQuantity || !categoryId) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
          }

          // Create a new product entry
          const product = new Product({
            name,
            price,
            description,
            stockQuantity,
            categoryId,
            imageURL: `/uploads/${req.file.filename}` // Save file path for image
          });

          await product.save();
          res.status(201).json({ success: true, data: product });
        } catch (error) {
          console.error('Product creation error:', error);
          res.status(400).json({ success: false, message: 'Failed to create product' });
        }
      });
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}