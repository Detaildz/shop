import React, { useState } from 'react';
import { mockData } from './mockData';

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
  const [data, setData] = useState(mockData);
  // idedam i myCart ir istrinam is maino ta produkta kuris nuejo i carta
  const handleAddToCart = (item) => {
    setCartData([...cartData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredData);
  };

  const handleRemoveFromCart = (item) => {
    setData([item, ...data]);

    const filteredCartData = cartData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCartData(filteredCartData);
  };

  return (
    <>
      <Navbar setTab={setTab} />
      {tab === 'all' && (
        <Main data={data} setData={setData} setCartData={handleAddToCart} />
      )}
      {tab === 'cart' && (
        <MyCart cartData={cartData} setCartData={handleRemoveFromCart} />
      )}{' '}
      {tab === 'favourite' && <Favourite favData={favData} />}
    </>
  );
}

export default App;
