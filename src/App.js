import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Calendar from './Calendar';
import { CreateForm } from './CreateForm';
// import { CodeColumn } from './CodeColumn';
// import { MusicColumn } from './MusicColumn';
// import { ExcerciseColumn } from './ExcerciseColumn';
import { Dashboard } from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};




export default App;
