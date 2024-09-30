// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/admin">Admin Dashboard</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/checkout">Checkout</Link></li>
        <li><Link href="/orders">Orders</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;