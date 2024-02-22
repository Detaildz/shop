import React, { useContext } from 'react';
import { handleSort } from '../../helpers/SortHelper';

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

  console.log(useContext(AppContext));

  return (
    <>
      <main className="main-container">
        <SortButtons handleSortData={handleSortData} />

        {data.map(({ title, start_production, image }) => {
          return (
            <Card
              key={title}
              title={title}
              start_production={start_production}
              image={image}
              handleCartButton={handleAddToCart}
              handleFavButton={handleAddToFav}
            />
          );
        })}
      </main>
    </>
  );
}

export default Main;
