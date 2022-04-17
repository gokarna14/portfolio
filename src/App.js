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
import Home from './js/home/Home';
import { hugeScroll } from './js/essentials';
import AlwaysRender from './js/AlwaysRender';



function App() {
  return (
    <div className="App">
      <AlwaysRender></AlwaysRender>
      {hugeScroll}
    </div>
  );
}

export default App;
