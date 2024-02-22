import React from 'react';
import { NavLink } from 'react-router-dom';
//components
import User from '../User/User';

import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <NavLink to="/" className="logo">
          <h1>My garage</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">All items</NavLink>
          </li>
          <li>
            <NavLink to="/my-cart">My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
        <User />
      </nav>
    </>
  );
}

export default Navbar;
