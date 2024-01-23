import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
import { Dashboard } from './Dashboard';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';
import { CreateForm } from './CreateForm';

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
      <Route path="/create" element={<CreateForm />} />
    </Routes>
  );
}

export default App;
