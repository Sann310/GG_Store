import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching user data from an API or local storage
    const fetchUser = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        const userData = await new Promise((resolve) =>
          setTimeout(() => resolve({ id: 1, name: 'Admin User', isAdmin: true }), 1000)
        );
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    // Replace with actual login logic
    const userData = { id: 1, name: 'Admin User', isAdmin: true };
    setUser(userData);
    router.push('/admin');
  };

  const logout = () => {
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);