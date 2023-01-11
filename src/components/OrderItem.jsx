import React from 'react';
import '../styles/OrderItem.scss'

const OrderItem = () => {
  return (
    <div className="OrderItem">
      <figure>
        <img src="../assets/bike.jpeg" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src="../assets/icons/icon_close.png" alt="close" />
    </div>
  );
};

export default OrderItem;