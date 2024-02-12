import React from 'react';
import '../Favorite/favourite.scss';
// components

import Card from '../Card/Card';

function Favourite({ favData }) {
  return (
    <main>
      {favData.map(({ title, description }) => (
        <Card key={title} title={title} description={description} />
      ))}
    </main>
  );
}

export default Favourite;
