import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home"
import './App.css';
import Calculator from './components/calculator/Calculator';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route  path='/'  element={<Home/>} ></Route>
    <Route  path='/calculator'  element={<Calculator/>} ></Route>

    </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
