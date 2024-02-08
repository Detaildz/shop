import React from 'react';
import { mockData } from '../../mockData';

import Card from '../Card/Card';

import './main.scss';

function Main() {
  console.log(mockData);
  return (
    <main className="main-container">
      {mockData.map((item) => {
        return (
          <Card
            kye={item.title}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </main>
  );
}

export default Main;
