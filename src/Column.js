// Column.js
import React from 'react';

export const Column = ({ itemData }) => {
  return (
    <div>
      <h2>{itemData ? `Item: ${itemData.itemName}` : 'No Item Created'}</h2>
      {itemData && (
        <>
          <p>Measurement Type: {itemData.measurementType}</p>
          <p>Total Hours: {itemData.totalHours}</p>
        </>
      )}
    </div>
  );
};
