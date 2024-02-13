import React from 'react';

import Card from '../Card/Card';

import './main.scss';

function Main({ setCartData, data, setData }) {
  // const [loading, setLoading] = useState(false);

  const handleSortData = (direction) => {
    const sortedData = data.toSorted((a, b) => {
      let fa = a.title.toLowerCase();
      let fb = b.title.toLowerCase();

      if (fa < fb) return direction === 'az' ? -1 : 1;
      if (fa > fb) return direction === 'az' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="main-action-btn">
        <button
          onClick={() => {
            handleSortData('az');
          }}
        >
          Sort A-Z ↓
        </button>
        <button onClick={handleSortData}>Sort A-Z ↓</button>
      </div>
      {data.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            setCartData={setCartData}
          />
        );
      })}
    </main>
  );
}

export default Main;
