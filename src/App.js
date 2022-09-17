import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home'
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route exact path= '/' element= {<Home/>}></Route> 
     <Route exact path= '/calculator' element= {<Calculator/>}></Route> 

      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
