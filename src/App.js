import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="content">Main</div>
    </div>
  );
}

export default App;
