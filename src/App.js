import "../src/assect/home.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/nav";
import Product from "./component/product";
import DescProduct from "./component/descProduct";
import Cart from "./component/cart";
import React from "react";
import {  CartProvider } from "react-use-cart"
function App() {
 
  return (
    <div className="App">
    <CartProvider>
    <NavBar />
      <Routes>
        <Route exact path="/product/:id" element={<DescProduct/>}/>
        <Route exact path="/cart" element={<Cart/>} /> 
        <Route path="/" element={<Product/>} />
      </Routes>
    </CartProvider>
    </div>
  );
}

export default App;
