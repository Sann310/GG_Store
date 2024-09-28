import React, { createContext, useContext, useState } from 'react';
import { fetchAdmins } from '../utils/api';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admins, setAdmins] = useState([]);

  const loadAdmins = async () => {
    const data = await fetchAdmins();
    setAdmins(data);
  };

  return (
    <AdminContext.Provider value={{ admins, loadAdmins }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);