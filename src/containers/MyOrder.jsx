import React, { useContext, useState } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import "@styles/MyOrder.scss";

import arrow from "@icons/flechita.svg";

const MyOrder = ({ toggleOrders, setToggleOrders}) => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)}/>
        <p className="title">My order</p>
      </div>
      {state.cart.length == 0 ? (
        <h5>No hay productos</h5>
      ) : (
        <div className="my-order-content">
          <div className="orderItem-container">
            {state.cart.map((product, index) => (
              <OrderItem
                indexValue={index}
                key={`orderItem-${index}`}
                product={product}
              />
            ))}
          </div>
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      )}
    </aside>
  );
};

export default MyOrder;
