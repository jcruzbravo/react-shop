import React from "react";
import '../styles/ShoppingCarItem.scss';

const ShoppingCarItem = () => {
  return (
    <div className="ShoppingCartItem">
      <figure>
        <img src="../assets/bike.jpeg" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
};

export default ShoppingCarItem;