import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-cool-text/react-cool-text/output/theme.css';
import React, { useEffect, useState } from 'react';

import './css/fonts.css'
import Navbar from './js/navbar/Navbar';
import Home from './js/home/Home';
import { hugeScroll } from './js/essentials';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {hugeScroll}
    </div>
  );
}

export default App;
