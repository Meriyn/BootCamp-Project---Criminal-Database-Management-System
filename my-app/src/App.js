import './App.css';
import Login from './components/Login';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Enter from './components/Enter';
import Search from './components/Search';
import Update from './components/Update';



function App() {
  return (
    <>
    <BrowserRouter>
   <Routes>
    <Route index element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/enter" element={<Enter />} />
    <Route path="/search" element={<Search />} />
    <Route path="/update" element={<Update />} />
    
   </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
