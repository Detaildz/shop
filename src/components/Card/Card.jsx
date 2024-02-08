import React from 'react';
import './card.scss';
// import Button from '../Button/Button';

function Card({ title, description }) {
  // console.log(props);

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Click Me</button>
    </div>
  );
}

export default Card;
