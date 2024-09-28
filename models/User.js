import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // This will store the hashed password
  shippingAddress: { type: String, required: false }, // Optional field for shipping address
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], // Stores references to the Product model
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], // Stores references to the Product model
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the User model
export default mongoose.models.User || mongoose.model('User', UserSchema);