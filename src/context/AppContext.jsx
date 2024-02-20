import React, { useState, createContext } from 'react';
import { mockData } from '../mockData';
export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(mockData);
  const [cartData, setCartData] = useState([]);
  const [favData, setFavData] = useState([]);

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
