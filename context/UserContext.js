import React, { createContext, useContext, useState } from 'react';
import { fetchUsers } from '../utils/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  return (
    <UserContext.Provider value={{ users, loadUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);