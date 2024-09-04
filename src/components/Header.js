import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="app-header">
      <h1>Welcome, {user ? user.username : 'Guest'}!</h1>
    </header>
  );
};

export default Header;
