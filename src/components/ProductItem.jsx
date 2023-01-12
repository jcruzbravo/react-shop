import React, { useContext } from "react";
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss'
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {

  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} className="product-img" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={addToCartIcon} alt="add to cart logo" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
