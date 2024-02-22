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
      <main className="main-container">
        <SortButtons handleSortData={handleSortData} />

        {cartData.map(({ title, start_production, image }) => (
          <Card
            key={title}
            title={title}
            start_production={start_production}
            image={image}
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
