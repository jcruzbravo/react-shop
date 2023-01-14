import React, { useState, useContext } from "react";
import Menu from '@components/Menu';
import MyOrder from "@containers/MyOrder";
import AppContext from '@context/AppContext';
import '@styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/coffe-and-code.jpg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    if(toggleOrders){
      handleToggleOrders();
    }
    setToggle(!toggle);
  }

  const handleToggleOrders = () => {
    if(toggle){
      handleToggle();
    }
    setToggleOrders(!toggleOrders);
  }

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="#/">All</a>
          </li>
          <li>
            <a href="#/">Electronics</a>
          </li>
          <li>
            <a href="#/">Furnitures</a>
          </li>
          <li>
            <a href="#/">Toys</a>
          </li>
          <li>
            <a href="#/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li 
            className="navbar-email" 
            onClick={handleToggle}
          >
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img
              src={shoppingCart}
              alt="shopping cart"
            />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
          </li>
        </ul>
      </div>
      { toggle && <Menu/> }
      { toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/> }
    </nav>
  );
};

export default Header;