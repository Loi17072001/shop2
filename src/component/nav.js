import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const NavBar = () => {
 return(
    <div className="Nav_bar">
    <NavLink to={"/"} className="Logo"> My Shop</NavLink>
    <NavLink to={"/cart"} className="giohang">
            <FaShoppingCart className="Nav_bar_icon"/>
        </NavLink>
    </div>
    
 )
}
export default NavBar;
