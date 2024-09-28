import React, { useEffect, useState } from 'react';
import { fetchCategories, fetchProducts, fetchUsers, fetchAdmins } from '../utils/api';
import styles from '../styles/AdminDashboard.module.css';

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [categoriesData, productsData, usersData, adminsData] = await Promise.all([
          fetchCategories(),
          fetchProducts(),
          fetchUsers(),
          fetchAdmins(),
        ]);
        setCategories(categoriesData);
        setProducts(productsData);
        setUsers(usersData);
        setAdmins(adminsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error loading data</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Admins</h2>
        <ul>
          {admins.map(admin => (
            <li key={admin.id}>{admin.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;