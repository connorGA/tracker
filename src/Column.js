// Column.js
import React, { useState } from 'react';
import { CreateForm } from './CreateForm';

export const Column = ({ itemData }) => {
  const [times, setTimes] = useState(itemData ? itemData.times : []);
  const [hoveredTime, setHoveredTime] = useState(null);

  const handleTimeSubmit = (time) => {
    setTimes([...times, time]);
  };

  // Calculate the total hours for styling the bar graph
  const totalHours = times.reduce((acc, time) => acc + parseFloat(time), 0);

  // Total hours you want to reach
  const targetTotalHours = 730; // 365 days x 2 hours per day

  return (
    <div>
      <h2>{itemData?.itemName || 'Default Item Name'}</h2>
      <CreateForm onSubmit={handleTimeSubmit} />
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
