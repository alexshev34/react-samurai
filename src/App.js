import React from 'react';
import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div class="app-wrapper-content">
        <Dialogs/>
      </div>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
