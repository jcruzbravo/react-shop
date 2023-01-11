import React from "react";
import '@styles/ShoppingCarItem.scss';

import bike from '@products/bike.jpeg';

const ShoppingCarItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img src={bike} alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
};

export default ShoppingCarItem;