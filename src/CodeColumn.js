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

export const CodeColumn = () => {
  const [times, setTimes] = useState([]);
  const [hoveredTime, setHoveredTime] = useState(null);

  const handleTimeSubmit = (time) => {
    setTimes([...times, time]);
  };

  // Calculate the total hours for styling the bar graph
  const totalHours = times.reduce((acc, time) => acc + parseFloat(time), 0);

  // Total hours you want to reach
  const targetTotalHours = 730;  //365 days x 2 hours per day

  return (
    <div>
      <h2>Code</h2>
      <TimeInput onSubmit={handleTimeSubmit} />
      <div>
        <strong>Hours: {totalHours}</strong>
        <div
          style={{
            display: 'flex',
            height: '40px',
            backgroundColor: 'black',
          }}
        >
          {times.map((time, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#4caf50', // Green color
                width: `${(parseFloat(time) / targetTotalHours) * 100}%`,
                marginRight: '2px', // Space between bars
                position: 'relative',
              }}
              onMouseEnter={() => setHoveredTime(time)}
              onMouseLeave={() => setHoveredTime(null)}
            >
              {hoveredTime === time && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#333',
                    color: '#fff',
                    padding: '5px',
                    borderRadius: '3px',
                  }}
                >
                  {time}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

