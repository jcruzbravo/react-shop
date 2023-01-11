import React from "react";
import '../styles/ProductItem.scss'

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <img src="./assets/bike.jpeg" alt="bike" className="product-img" />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="bike" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
