import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './CreateForm.css';

export const CreateForm = ({ onItemCreate }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [itemName, setItemName] = useState('');
  const [totalHours, setTotalHours] = useState(0);
  const [yearlyGoal, setYearlyGoal] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'itemName') {
      setItemName(value);
    } else if (name === 'totalHours') {
      setTotalHours(value);
    } else if (name === 'yearlyGoal') {
      setYearlyGoal(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onItemCreate({
      itemName: itemName,
      times: Array(30).fill(0).map(() => parseFloat(totalHours)), // Example: creates an array of 30 days with the same hours logged
    });

    navigate('/'); // Redirect to the dashboard after submission
  };
  // Render the Home button only on the CreateForm page
  const renderHomeButton = location.pathname === '/create' && (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <button className='home-button'>Home</button>
    </Link>
  );

  return (
    <div className='create-form-container'>
      {renderHomeButton}
      <h2 className='form-title'>Create Tracker Item</h2>
      <form onSubmit={handleSubmit}>
        <label className='create-label'>
          Item Name:
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={handleInputChange}
          />
        </label>

        <label className='create-label'>
          Total Hours:
          <input
            type="number"
            name="totalHours"
            value={totalHours}
            onChange={handleInputChange}
          />
        </label>

        <label className='create-label'>
          Yearly Goal (in hours):
          <input
            type="number"
            name="yearlyGoal"
            value={yearlyGoal}
            onChange={handleInputChange}
          />
        </label>

        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
};
