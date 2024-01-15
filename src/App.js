import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};




export default App;
