import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import Link
import { Calendar } from './Calendar';
import { CreateForm } from './CreateForm';
import { Column } from './Column';
import { TestComponent } from './TestComponent';
import './Dashboard.css'

export const Dashboard = () => {
  const [itemData, setItemData] = useState(null);

  const handleItemCreate = (data) => {
    setItemData(data);
  };

  return (
    <div className='dashboard'>
      <Calendar />
      

      {/* Add a Link styled as a button */}
      <Link to="/create" style={{ textDecoration: 'none' }}>
        <button className='create-button'>Create New Item</button>
      </Link>

      <Routes>
        <Route index element={<Column itemData={itemData} />} />
        <Route path="/create" element={<CreateForm onItemCreate={handleItemCreate} />} />
        <Route path="/test" element={<TestComponent testProp="Hello" />} />
        {/* other internal routes */}
      </Routes>
    </div>
  );
};

