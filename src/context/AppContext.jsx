import React, { useState, createContext, useEffect } from 'react';
import { cfg } from '../cfg/cfg';
export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cartData')) || []
  );
  const [favData, setFavData] = useState(
    JSON.parse(localStorage.getItem('favData')) || []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${cfg.API.HOST}/product/`);

        const products = await response.json();

        const filteredData = products.filter(
          (item) => !cartData.some((cartItem) => cartItem.title === item.title)
        );
        setData(filteredData);
      } catch (error) {
        throw new Error('Oooops, Something went wrong');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [data, cartData]);

  useEffect(() => {
    localStorage.setItem('favData', JSON.stringify(favData));
  }, [favData]);

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

  const handleAddToFav = (item) => {
    setFavData([item, ...favData]);
  };

  const handleRemoveFromFav = (item) => {
    setFavData([item, ...data]);

    const filteredFavData = favData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setFavData(filteredFavData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cartData,
        favData,
        setCartData,
        handleAddToCart,
        handleRemoveFromCart,
        handleAddToFav,
        handleRemoveFromFav,
        setFavData,
      }}
    >
      {[props.children]}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
