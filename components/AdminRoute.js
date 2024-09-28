import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !user.isAdmin)) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user || !user.isAdmin) {
    return <div>Loading...</div>;
  }

  return children;
};

export default AdminRoute;