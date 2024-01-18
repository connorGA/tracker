import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Ensure this path is correct

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext); // useContext is now used here

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};



