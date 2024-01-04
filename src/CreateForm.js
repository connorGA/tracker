// CreateForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateForm = ({ onItemCreate }) => {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState('');
  const [measurementType, setMeasurementType] = useState('yesNo');
  const [totalHours, setTotalHours] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'itemName') {
      setItemName(value);
    } else if (name === 'measurementType') {
      setMeasurementType(value);
    } else if (name === 'totalHours') {
      setTotalHours(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onItemCreate({
      itemName: itemName,
      measurementType: measurementType,
      totalHours: totalHours,
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
          Measurement Type:
          <select
            name="measurementType"
            value={measurementType}
            onChange={handleInputChange}
          >
            <option value="yesNo">Yes/No</option>
            <option value="time">Time</option>
            {/* Add more options as needed */}
          </select>
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

