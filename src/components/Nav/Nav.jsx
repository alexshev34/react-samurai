import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () =>{
    return(
         <nav className={s.nav}>
             <ul className="list">
                <li className={s.item}><NavLink to="/profile">Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs">Messages</NavLink></li>
                <li className={s.item}><a href="/news">News</a></li>
                <li className={s.item}><a href="/music">Music</a></li>
            </ul>
         </nav>
    );
  }

  export default Nav;