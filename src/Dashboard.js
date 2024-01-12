import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { Calendar } from './Calendar';
import { CreateForm } from './CreateForm';
import { Column } from './Column';
import { TestComponent } from './TestComponent';
import './Dashboard.css';

export const Dashboard = () => {
  const [itemData, setItemData] = useState(null);
  const location = useLocation(); // Get the current location

  const handleItemCreate = (data) => {
    setItemData(data);
  };

  // Conditionally render the Create New Item button only on the home page
  const renderCreateButton = location.pathname === '/' && (
    <Link to="/create" style={{ textDecoration: 'none' }}>
      <button className='create-button'>Create New Item</button>
    </Link>
  );

  return (
    <div className='dashboard'>
      <Calendar />

      {renderCreateButton}

      <Routes>
        <Route index element={<Column itemData={itemData} />} />
        <Route path="/create" element={<CreateForm onItemCreate={handleItemCreate} />} />
        <Route path="/test" element={<TestComponent testProp="Hello" />} />
        {/* other internal routes */}
      </Routes>
    </div>
  );
};
