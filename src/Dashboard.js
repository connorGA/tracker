// Dashboard.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Calendar } from './Calendar';
import { CreateForm } from './CreateForm'; 

import { Column } from './Column';

export const Dashboard = () => {
  const [itemData, setItemData] = useState(null);

  const handleItemCreate = (data) => {
    setItemData({ itemName: data.itemName, times: [] });
  };

  return (
    <div>
      <Calendar />
      <h2>Dashboard</h2>
      <Routes>
        <Route
          path="/"
          element={<Column itemData={itemData} />}
        />
        <Route
          path="/create"
          element={<CreateForm onItemCreate={handleItemCreate} />}
        />
      </Routes>
    </div>
  );
};

