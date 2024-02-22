import React, { useContext } from 'react';
import { handleSort } from '../../helpers/SortHelper';
import '../Favorite/favorite.scss';
import '../Main/main.scss';
// components
import SortButtons from '../Button/SortButtons';

import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function Favorite() {
  const { favData, setFavData } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(favData, direction);
    setFavData(sortedData);
  };

  return (
    <>
      <main className="main-container">
        <SortButtons handleSortData={handleSortData} />

        {favData.map(({ title, description }) => {
          return (
            <Card
              key={title}
              title={title}
              description={description}
              handleCartButton={() => {}}
            />
          );
        })}
      </main>
    </>
  );
}

export default Favorite;
