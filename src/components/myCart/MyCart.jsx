import React, { useContext, useState } from 'react';
import { handleSort } from '../../helpers/sortHelper';
import '../myCart/myCart.scss';
import '../Main/main.scss';
// components
import SortButtons from '../Button/SortButtons';
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function MyCart() {
  const [searchValue, setSearchValue] = useState('');
  const { cartData, setCartData, handleRemoveFromCart } =
    useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(cartData, direction);
    setCartData(sortedData);
  };
  return (
    <>
      <main className="main-container">
        <div className="main-container__action">
          <SortButtons handleSortData={handleSortData} />
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>

        {cartData
          .filter(
            ({ title, start_production }) =>
              (typeof title === 'string' &&
                title.toLowerCase().includes(searchValue.toLowerCase())) ||
              (typeof start_production === 'number' &&
                start_production
                  .toString()
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()))
          )
          .map(({ title, start_production, image }) => (
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
