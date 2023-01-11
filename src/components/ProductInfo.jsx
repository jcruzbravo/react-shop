import React from "react";
import "../styles/ProductInfo.scss";

const ProductInfo = () => {
  return (
    <>
      <img src="../assets/bike.jpeg" alt="bike" />

      <div className="ProductInfo">
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          With its fuctional and practical interior, this refrigerator also
          fulfills a decorative function, adding personality and retro-vintage
          aesthetic to your kitchen or workplace
        </p>
        <button className="primary-button add-to-cart-button">
          <img src="../assets/icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
