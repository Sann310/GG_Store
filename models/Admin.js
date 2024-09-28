import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the Admin Schema
const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }, // e.g., admin, manager, etc.
  permissions: {
    manageProducts: { type: Boolean, default: true },
    manageCategories: { type: Boolean, default: true },
    manageUsers: { type: Boolean, default: true },
    processOrders: { type: Boolean, default: true },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Hash the password before saving the admin
AdminSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    return next();
  }

  // Generate a salt
  const salt = await bcrypt.genSalt(10);

  // Hash the password using the salt
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords during login
AdminSchema.methods.comparePassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

// Export the Admin model
export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);