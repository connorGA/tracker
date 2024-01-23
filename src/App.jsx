import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
import { Dashboard } from './Dashboard';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        // <PrivateRoute>
          <Dashboard />
        // </PrivateRoute>
      } />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegistrationForm />} />
    </Routes>
  );
}

export default App;
