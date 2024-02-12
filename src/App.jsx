import React, { useState } from 'react';

// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCart from './components/myCart/MyCart';
import Favourite from './components/Favorite/Favourite';

import './App.css';

function App() {
  const [tab, setTab] = useState('all'); // possible options: 'all', 'card', 'favorite'
  const [cartData, setCartData] = useState([]);
  const [favData, setFavData] = useState([]);

  return (
    <>
      <Navbar setTab={setTab} />
      {tab === 'all' && <Main setCartData={setCartData} />}
      {tab === 'cart' && (
        <MyCart cartData={cartData} setCartData={setCartData} />
      )}{' '}
      {tab === 'favourite' && <Favourite favData={favData} />}
    </>
  );
}

export default App;
