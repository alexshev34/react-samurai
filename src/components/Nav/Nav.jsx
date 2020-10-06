import React from 'react';
import s from './Nav.module.css';

const Nav = () =>{
    return(
         <nav className={s.nav}>
             <ul className="list">
                <li className={s.item}><a href="/profile">Profile</a></li>
                <li className={s.item}><a href="/dialogs">Messages</a></li>
                <li className={s.item}><a href="/news">News</a></li>
                <li className={s.item}><a href="/music">Music</a></li>
            </ul>
         </nav>
    );
  }

  export default Nav;