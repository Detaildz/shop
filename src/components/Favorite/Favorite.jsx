import React, { useContext, useState } from 'react';
import { handleSort } from '../../helpers/sortHelper';
import '../Favorite/favorite.scss';
import '../Main/main.scss';
// components
import SortButtons from '../Button/SortButtons';

import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function Favorite() {
  const [searchValue, setSearchValue] = useState('');
  const { favData, setFavData } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(favData, direction);
    setFavData(sortedData);
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

        {favData
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
          .map(({ title, image, start_production }) => {
            return (
              <Card
                key={title}
                title={title}
                image={image}
                start_production={start_production}
              />
            );
          })}
      </main>
    </>
  );
}

export default Favorite;
