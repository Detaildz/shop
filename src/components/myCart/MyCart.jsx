import React, { useContext } from 'react';
import { handleSort } from '../../helpers/SortHelper';
import '../myCart/myCart.scss';
import '../Main/main.scss';
// components
import SortButtons from '../Button/SortButtons';
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function MyCart() {
  const { cartData, setCartData, handleRemoveFromCart } =
    useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setCartData(sortedData);
  };
  return (
    <>
      <h1 className="header-text">My Cart:</h1>
      <main className="main-container">
        <SortButtons handleSortData={handleSortData} />

        {cartData.map(({ title, description }) => (
          <Card
            key={title}
            title={title}
            description={description}
            handleCartButton={handleRemoveFromCart}
            cart={true}
            fav={true}
          />
        ))}
      </main>
    </>
  );
}

export default MyCart;
