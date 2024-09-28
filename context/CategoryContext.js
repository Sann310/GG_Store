import React, { createContext, useContext, useState } from 'react';
import { fetchCategories } from '../utils/api';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };

  return (
    <CategoryContext.Provider value={{ categories, loadCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);