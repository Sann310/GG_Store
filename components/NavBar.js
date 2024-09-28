import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const { cart } = useCart();

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/cart" legacyBehavior>
        <a>Cart ({cart ? cart.length : 0})</a>
      </Link>
    </nav>
  );
};

export default NavBar;