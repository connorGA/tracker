import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your backend API endpoint
    const registerApiUrl = 'http://localhost:5000/api/users/register'; 

    try {
      const response = await fetch(registerApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.error('Registration failed:', response.status, errorBody);
        throw new Error('Registration failed');
      }

      // Handle successful registration (e.g., redirect to login or auto-login)
      navigate('/login'); // Redirect to login page after registration
      
    } catch (error) {
      const errorMessage = await error.response.json();
      console.error('Registration error:', errorMessage);
            }
        }
    return (
            <div className='registration-form-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <input
                   type="text"
                   name="username"
                   value={username}
                   placeholder="Username"
                   onChange={handleInputChange}
                 />
            <input
                   type="email"
                   name="email"
                   value={email}
                   placeholder="Email"
                   onChange={handleInputChange}
                 />
            <input
                   type="password"
                   name="password"
                   value={password}
                   placeholder="Password"
                   onChange={handleInputChange}
                 />
            <button type="submit">Register</button>
            </form>
            </div>
            );
    };
    

