import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className="nav-conteiner">
        <h1>My healthy shop</h1>
        <ul>
          <li>All items</li>
          <li>Favourites</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
