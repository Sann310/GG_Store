import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [adminDetails, setAdminDetails] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [currentSection, setCurrentSection] = useState('home');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdminClick = () => {
    setCurrentSection('adminLogin');
  };

  const handleCustomerClick = () => {
    router.push('/customerDashboard'); // Redirect directly for customers
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Check credentials here:
    if (
      (adminDetails.username === 'san' &&
        adminDetails.password === '123' &&
        adminDetails.email === 'u6531336@au.edu') ||
      (adminDetails.username === '123' &&
        adminDetails.password === '123' &&
        adminDetails.email === 'hashtagsna@gmail.com')
    ) {
      router.push('/adminDashboard'); // Redirect to admin dashboard
    } else {
      alert('Invalid credentials. Please check your username, email, or password.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      {currentSection === 'home' && (
        <>
          <h1 className={styles.heading}>WELCOME TO GG STORE</h1>
          <div className={styles.buttonSection}>
            <div className={styles.adminCustomerBox} onClick={handleAdminClick}>
              ADMIN
            </div>
            <span className={styles.orText}>OR</span>
            <div className={styles.adminCustomerBox} onClick={handleCustomerClick}>
              CUSTOMER
            </div>
          </div>
        </>
      )}
      {currentSection === 'adminLogin' && (
        <div className={styles.loginSection}>
          <h2 className={styles.panelTitle}>Admin Login</h2>
          <form onSubmit={handleAdminLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={adminDetails.email}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={adminDetails.username}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={adminDetails.password}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}