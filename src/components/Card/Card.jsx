import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// import FavSVGoff from './favorite-star-off.svg';
// import FavSVGon from './favorite-star-on.svg';

function Card({ title, description, handleCartButton, cart }) {
  const { handleAddToFav, handleRemoveFromFav, favData } =
    useContext(AppContext);

  const isFavorite = favData.some((item) => item.title === title);

  const handleAddToCart = () => {
    handleCartButton({ title, description });
  };

  return (
    <div className="card">
      <h3> {title}</h3>
      <p>{description}</p>
      <button onClick={handleAddToCart}>
        {cart ? 'Remove' : 'Add to cart'}
      </button>
      <FontAwesomeIcon
        icon={faHeart}
        beat
        className={`favIcon ${isFavorite ? 'favIcon--clicked' : ''}`}
        onClick={() =>
          isFavorite
            ? handleRemoveFromFav({ title, description })
            : handleAddToFav({ title, description })
        }
      />
    </div>
  );
}

export default Card;
