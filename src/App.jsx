import React from 'react'
import "./index.css";
import Home from './routes/Home';
import ForCompanies from './routes/ForCompanies';
import ForDevelopers from './routes/ForDevelopers';
import Resources from './routes/Resources';
import BecomeaDeveloper from './routes/Become a Developer';


import { Route, Routes } from 'react-router-dom';
const App = ()=>  {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/forcompanies" element={<ForCompanies/>} />
      <Route path="/fordevelopers" element={<ForDevelopers/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="/becomeadeveloper" element={<BecomeaDeveloper/>} />
    </Routes>
    </>
  
  )
}

export default App
