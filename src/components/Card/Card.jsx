import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// import FavSVGoff from './favorite-star-off.svg';
// import FavSVGon from './favorite-star-on.svg';

function Card({ title, quantity, image, handleCartButton, cart }) {
  const { handleAddToFav, handleRemoveFromFav, favData } =
    useContext(AppContext);

  const isFavorite = favData.some((item) => item.title === title);

  const handleAddToCart = () => {
    handleCartButton({ title, quantity, image });
  };

  return (
    <div className="cardBlock">
      <h3> {title}</h3>
      <img src={image} alt="" className="cardImg" />
      <p>Year: {quantity}</p>
      <button onClick={handleAddToCart}>
        {cart ? 'Remove' : 'Add to cart'}
      </button>
      <FontAwesomeIcon
        icon={faHeart}
        beat
        className={`favIcon ${isFavorite ? 'favIcon--clicked' : ''}`}
        onClick={() =>
          isFavorite
            ? handleRemoveFromFav({ title, quantity })
            : handleAddToFav({ title, quantity })
        }
      />
    </div>
  );
}

export default Card;
