import React from 'react';
import AdminList from '../components/AdminList';
import { AdminProvider } from '../context/AdminContext';

const AdminsPage = () => {
  return (
    <AdminProvider>
      <AdminList />
    </AdminProvider>
  );
};

export default AdminsPage;