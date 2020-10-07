import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile';


function App(props) {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav/>
        <div class="app-wrapper-content">
          <Route exact path="/dialogs" render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} />} /> 
          <Route path="/profile" render ={ () => <Profile posts={props.posts} /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
