// Dashboard.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Calendar } from './Calendar';
import { CreateForm } from './CreateForm';
import { Column } from './Column';
import { TestComponent } from './TestComponent';

export const Dashboard = () => {
  const [itemData, setItemData] = useState(null);

  const handleItemCreate = (data) => {
    setItemData(data);
  };

  return (
    <div>
      <Calendar />
      <h2>Dashboard</h2>
      <Routes>
        <Route index element={<Column itemData={itemData} />} />
        <Route path="/create" element={<CreateForm onItemCreate={handleItemCreate} />} />
        <Route path="/test" element={<TestComponent testProp="Hello" />} />
        {/* other internal routes */}
      </Routes>
    </div>
  );
};


