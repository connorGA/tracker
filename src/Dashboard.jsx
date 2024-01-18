import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Calendar } from './Calendar';
import { CreateForm } from './CreateForm';
import { Column } from './Column';
import { TestComponent } from './TestComponent';
import './Dashboard.css';

export const Dashboard = () => {
  const [itemData, setItemData] = useState([]);
  const location = useLocation();

  // Function to parse tracker item data
  const parseTrackerItem = (item) => {
    return {
      id: item._id.$oid,
      name: item.name,
      hoursCollected: parseInt(item.hoursCollected.$numberInt, 10),
      goalHours: parseInt(item.goalHours.$numberInt, 10),
      // Add any other fields you need here
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('userToken');
      const headers = { 'Authorization': `Bearer ${token}` };

      try {
        const response = await fetch('http://localhost:5000/api/trackerItems', { headers });
        if (!response.ok) throw new Error('Data fetch failed');
        const rawData = await response.json();
        const parsedData = rawData.map(item => parseTrackerItem(item));
        setItemData(parsedData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  const handleItemCreate = (newItemData) => {
    const parsedItem = parseTrackerItem(newItemData);
    setItemData([...itemData, parsedItem]);
  };

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
