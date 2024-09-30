import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/">Home</Link></li>
          <li className={styles.navItem}><Link href="/cart">Cart</Link></li>
          <li className={styles.navItem}><Link href="/orders">Orders</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}