import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import NavBar from '../components/NavBar';
import AdminRoute from '../components/AdminRoute';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <NavBar />
        {Component.name === 'AdminDashboard' ? (
          <AdminRoute>
            <Component {...pageProps} />
          </AdminRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;