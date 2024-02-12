import React from 'react';
import './Navbar.scss';

function Navbar({ setTab }) {
  return (
    <>
      <nav className="nav-conteiner">
        <h1>My healthy shop</h1>
        <ul>
          <li
            onClick={() => {
              setTab('all');
            }}
          >
            All items
          </li>

          <li
            onClick={() => {
              setTab('cart');
            }}
          >
            My Cart
          </li>
          <img src=".../utils/cart.png" alt="" />
          <li
            onClick={() => {
              setTab('favourite');
            }}
          >
            Favourites
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
