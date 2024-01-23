import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');  // Changed from username to email
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {  // Changed from username to email
      setEmail(value);  // Changed from setUsername to setEmail
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginApiUrl = 'http://localhost:5000/api/users/login'; 

    try {
      const response = await fetch(loginApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),  // Changed from username to email
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Handle the response, store the user token, etc.
      const data = await response.json();
      console.log("Received data on login:", data);

      localStorage.setItem('userToken', data.token); // Assuming the token is in the response
      localStorage.setItem('userName', data.name);


      navigate('/'); // Redirect to dashboard or another page on successful login
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., show error message)
    }
  };

  return (
    <div className='login-form-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"  // Changed from username to email
          value={email}  // Changed from username to email
          placeholder="Email"  // Changed placeholder
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
 