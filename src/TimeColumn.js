import React, { useState } from 'react';

const TimeInput = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
      };
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter time (e.g., 1 hour, 2 hours 15 mins)"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Save</button>
        </form>
      );
    };

export const TimeColumn = () => {
    const [times, setTimes] = useState([]);

    const handleTimeSubmit = (time) => {
      setTimes([...times, time]);
    };
  
    return (
      <div>
        <h2>Column</h2>
        <TimeInput onSubmit={handleTimeSubmit} />
        <div>
          <strong>Entered Times:</strong>
          <ul>
            {times.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };