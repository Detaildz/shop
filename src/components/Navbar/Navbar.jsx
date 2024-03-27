import React from 'react';
import { NavLink } from 'react-router-dom';

//components
import './Navbar.scss';
import AdminUser from '../AdminUser/AdminUser';

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <NavLink to="/" className="logo">
          <h1>My garage</h1>
        </NavLink>
        <div className="nav-container__info">
          <ul>
            <li>
              <NavLink to="/">Main</NavLink>
            </li>
            <li>
              <NavLink to="/my-cart">Buy</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
          <AdminUser />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
