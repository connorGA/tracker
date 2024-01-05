import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateForm = ({ onItemCreate }) => {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState('');
  const [totalHours, setTotalHours] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'itemName') {
      setItemName(value);
    } else if (name === 'totalHours') {
      setTotalHours(value);
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

  return (
    <div>
      <h2>Create Tracker Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Total Hours:
          <input
            type="number"
            name="totalHours"
            value={totalHours}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
