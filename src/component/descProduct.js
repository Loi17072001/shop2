import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {  useCart } from "react-use-cart";

const DescProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { addItem } = useCart();

  
  useEffect(() => {
      const getProduct = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
        };
        getProduct();
    }, []);
  return (
    <div className="desc_product">
      <h1>Mô tả sản phẩm</h1>
      <div className="desc-product_item_img">
        <img alt="hihi" className="desc-product_item_img" src={product.image} />
      </div>
      <span>{product.title}</span> <br></br>
      <span>{product.price}$</span> <br></br>
      <span>{product.description}</span>
      <button onClick={() => addItem(product)}>Thêm vào giỏ hàng</button>
    </div>
  );
};
export default DescProduct;
