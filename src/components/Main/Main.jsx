import React, { useContext, useState } from 'react';
import { handleSort } from '../../helpers/sortHelper';

import Card from '../Card/Card';
import SortButtons from '../Button/SortButtons';

import './main.scss';
import { AppContext } from '../../context/AppContext';

function Main() {
  const { data, setData, handleAddToCart, handleAddToFav } =
    useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  const [searchValue, setSearchValue] = useState('');

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
        {data
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
              handleCartButton={handleAddToCart}
              handleFavButton={handleAddToFav}
            />
          ))}
      </main>
    </>
  );
}

export default Main;
