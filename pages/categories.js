import React from 'react';
import CategoryList from '../components/CategoryList';
import { CategoryProvider } from '../context/CategoryContext';
import styles from '../styles/categories.module.css';

const CategoriesPage = () => {
  return (
    <CategoryProvider>
      <div className={styles.container}>
        <CategoryList />
      </div>
    </CategoryProvider>
  );
};

export default CategoriesPage;