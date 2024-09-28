// models.js

export const Category = {
    id: Number,
    name: String,
    description: String,
  };
  
  export const Product = {
    id: Number,
    name: String,
    description: String,
    price: Number,
    imageURL: String,
    categoryId: Number,
    stockQuantity: Number,
    createdAt: Date,
    updatedAt: Date,
  };
  
  export const User = {
    id: Number,
    name: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
  };
  
  export const Admin = {
    id: Number,
    name: String,
    email: String,
    password: String,
    createdAt: Date,
    updatedAt: Date,
  };