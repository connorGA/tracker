import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { Calendar } from './Calendar';
import { CreateForm } from './CreateForm';
import { Column } from './Column';
import { TestComponent } from './TestComponent';
import './Dashboard.css';

export const Dashboard = () => {
  const [itemData, setItemData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/trackerItems');
        if (!response.ok) throw new Error('Data fetch failed');

        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

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
