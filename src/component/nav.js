import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const NavBar = () => {
  const { totalItems } = useCart();
  return (
    <div className="Nav_bar">
      <NavLink to={"/shop2"} className="Logo">
        <img alt="logo outfiz" src="./logo.png"></img>
      </NavLink>
      <NavLink to={"/cart"} className="giohang">
        <FiShoppingCart className="Nav_bar_icon" />
        <div className="Nav_bar_icon_number">
          <span>{totalItems}</span>
        </div>
      </NavLink>
    </div>
  );
};
export default NavBar;
