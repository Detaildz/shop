import React from 'react';
import './card.scss';
// import Button from '../Button/Button';

function Card({ title, description, setCartData }) {
  // console.log(props);

  const handleAddToCart = () => {
    setCartData([{ title, description }]);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default Card;
