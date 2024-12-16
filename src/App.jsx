import React from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import './App.css'
import WorkoutProvider from './context/WorkoutProvider';
const App = () => {
  const {id} = useParams()

 
  return (
    <WorkoutProvider>
      <div>
        <h1>this is brownser client</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </WorkoutProvider>
  );
};

export default App;
