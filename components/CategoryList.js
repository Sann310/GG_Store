import React, { useEffect } from 'react';
import { useCategory } from '../context/CategoryContext';
import styles from '../styles/categories.module.css';

const CategoryList = () => {
  const { categories, loadCategories } = useCategory();

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <h2 className={styles.header}>Categories</h2>
      <div className={styles.products}>
        {categories.map(category => (
          <div key={category.id} className={styles.product}>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;