import React from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to GG Store</h1>
        <p>Find the best products here!</p>
      </header>

      <section className={styles.categories}>
        <div className={styles.category}>
          <h2>Apparel</h2>
          <p>Clothing and accessories</p>
          <Link href="/apparel" className={styles.button}>
            Shop Now
          </Link>
        </div>
        <div className={styles.category}>
          <h2>Accessories</h2>
          <p>Hats, bags, and more</p>
          <Link href="/accessories" className={styles.button}>
            Shop Now
          </Link>
        </div>
        <div className={styles.category}>
          <h2>Categories</h2>
          <p>Browse all categories</p>
          <Link href="/categories" className={styles.button}>
            View Categories
          </Link>
        </div>
      </section>

      <section className={styles.featuredProducts}>
        <div className={styles.product}>
          <img src="/images/zelda-tshirt.jpg" alt="Legend of Zelda T-Shirt" />
          <h3>Legend of Zelda T-Shirt</h3>
          <p>$20</p>
          <Link href="/products/1" className={styles.button}>
            View Details
          </Link>
        </div>
        <div className={styles.product}>
          <img src="/images/mario-hat.jpg" alt="Mario Hat" />
          <h3>Mario Hat</h3>
          <p>$15</p>
          <Link href="/products/2" className={styles.button}>
            View Details
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;