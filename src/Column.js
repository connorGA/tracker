import React from 'react';

export const Column = ({ itemData }) => {
  // Define your goal hours
  const goalHours = 2;

  return (
    <div>
      <h2>{itemData ? `Item: ${itemData.itemName}` : 'No Item Created'}</h2>
      {itemData && (
        <>
          {/* <p>Measurement Type: {itemData.measurementType}</p> */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', maxWidth: '140px' }}>
            {itemData.times.map((hours, index) => (
              <div
                key={index}
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: hours >= goalHours ? 'green' : 'lightgrey',
                }}
                title={`Day ${index + 1}: ${hours} hours`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
