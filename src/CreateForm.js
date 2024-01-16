import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CreateForm.css';

export const CreateForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [hoursCollected, setHoursCollected] = useState(0);
  const [goalHours, setGoalHours] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'hoursCollected':
        setHoursCollected(value);
        break;
      case 'goalHours':
        setGoalHours(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trackerItemData = {
      name,
      hoursCollected: parseFloat(hoursCollected),
      goalHours: parseFloat(goalHours),
    };

    try {
      const response = await fetch('http://localhost:5000/api/trackerItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include authorization header if needed
          // 'Authorization': `Bearer ${userToken}`,
        },
        body: JSON.stringify(trackerItemData),
      });

      if (!response.ok) {
        throw new Error('Failed to create tracker item');
      }

      const newItem = await response.json();
      console.log('New item created:', newItem);
      navigate('/'); // Redirect to the dashboard after submission
    } catch (error) {
      console.error('Error creating item:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className='create-form-container'>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button className='home-button'>Home</button>
      </Link>
      <h2 className='form-title'>Create Tracker Item</h2>
      <form onSubmit={handleSubmit}>
        <label className='create-label'>
          Item Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>

        <label className='create-label'>
          Total Hours Collected:
          <input
            type="number"
            name="hoursCollected"
            value={hoursCollected}
            onChange={handleInputChange}
          />
        </label>

        <label className='create-label'>
          Yearly Goal (in hours):
          <input
          type="number"
          name="goalHours"
          value={goalHours}
          onChange={handleInputChange}
       />
      </label>

    <button className='submit-button' type="submit">Submit</button>
  </form>
</div>
);
};
