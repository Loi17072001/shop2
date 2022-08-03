import "../src/assect/home.css";
import { Routes, Route } from "react-router-dom";
import Product from "./component/product";
import DescProduct from "./component/descProduct";
import NavBar from "./component/nav";
import Cart from "./component/cart";
import React from "react";
import {  CartProvider } from "react-use-cart"
function App() {
 
  return (
    <div className="App">
    <CartProvider>
    <NavBar />
      <Routes>
        <Route  path="" element={<Product/>} /> 
        <Route  path="/product/:id" element={<DescProduct/>}/>
        <Route  path="/cart" element={<Cart/>} /> 
      </Routes>
    </CartProvider>
    </div>
  );
}

export default App;
