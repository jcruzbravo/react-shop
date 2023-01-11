import React from "react";
import '@styles/ProductItem.scss'

import cupCoffe from '@products/cup-coffe6.jpg';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <img src={cupCoffe} alt="cup_coffe" className="product-img" />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={addToCart} alt="add to cart logo" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
