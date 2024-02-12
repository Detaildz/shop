import React from 'react';
import '../myCart/myCart.scss';
import '../Main/main.scss';
// components

import Card from '../Card/Card';

function MyCart({ cartData, setCartData }) {
  return (
    <>
      <div className="main-cart_header">
        <h1>My Cart:</h1>
      </div>
      <main className="main-container">
        {cartData.map(({ title, description }) => (
          <Card
            key={title}
            title={title}
            description={description}
            setCartData={setCartData}
          />
        ))}
      </main>
    </>
  );
}

export default MyCart;
