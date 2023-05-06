import React from "react";

const NavigationButton = () => {
  return <button className="navigation-button"></button>;
};
const Logo = () => {
  return <a className="logo"></a>;
};
const CartButton = () => {
  return <button className="cart-button"></button>;
};

const RentBikeButton = () => {
  return <button className="rent-bike-button">Wypożycz rower</button>;
};

const Menu = () => {
  return (
    <div className="menu">
      <NavigationButton />
      <Logo />
      <CartButton />
      <RentBikeButton />
    </div>
  );
};

export default Menu;
