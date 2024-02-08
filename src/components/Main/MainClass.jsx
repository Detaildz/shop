import React from 'react';
import { mockData } from '../../mockData';

import Card from '../Card/Card';

import './main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: mockData,
    };
  }

  render() {
    const { data } = this.state;

    const handleSortData = (direction) => {
      const sortedData = data.sort((a, b) => {
        let fa = a.title.toLowerCase();
        let fb = b.title.toLowerCase();

        if (fa < fb) return direction === 'az' ? -1 : 1;
        if (fa > fb) return direction === 'az' ? 1 : -1;
        return 0;
      });

      this.setState({
        data: sortedData,
      });
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
          <button
            onClick={() => {
              handleSortData('za');
            }}
          >
            Sort A-Z ↓
          </button>
        </div>
        {data.map((item) => {
          return (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
