import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/AdminDashboard.module.css';

export default function AdminDashboard() {
  const router = useRouter();

  const handleRedirect = (page) => {
    router.push(`/${page}`);
  };

  const handleLogout = () => {
    router.push('/'); // Navigates back to index.js for admin login
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>

      <h1 className={styles.heading}>WELCOME TO GG STORE PANEL</h1>

      <div className={styles.buttonSection}>
        <div
          className={styles.adminBox}
          onClick={() => handleRedirect('addDelete')}
        >
          Add & Delete Item
        </div>
        <div className={styles.adminBox} onClick={() => handleRedirect('checkStock')}>
          Check Stock
        </div>
        <div className={styles.adminBox} onClick={() => handleRedirect('orders')}>
          Orders
        </div>
        <div className={styles.adminBox} onClick={() => handleRedirect('settings')}>
          Settings
        </div>
        {/* Logout Button */}
        <button className={styles.logoutButton} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}