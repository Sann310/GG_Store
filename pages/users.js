import React from 'react';
import UserList from '../components/UserList';
import { UserProvider } from '../context/UserContext';

const UsersPage = () => {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
};

export default UsersPage;