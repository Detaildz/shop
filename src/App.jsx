import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCart from './components/myCart/MyCart';
import Favorite from './components/Favorite/Favorite';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
