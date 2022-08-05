import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCart } from "react-use-cart";
import NavBar from "./nav";

const DescProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { addItem } = useCart();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  }, []);

  const confirmAddProduct = (product) => {
    if (window.confirm("Chắc chưaaaaaaaaaaa ?")) {
      addItem(product, count);
    }
  };
  return (
    <div className="desc_product">
      <div className="desc_infor_product">
        <div className="desc-product_item_img">
          <img
            alt="hihi"
            className="desc-product_item_img"
            src={product.image}
          />
        </div>
        <div className="desc_infor_product_right">
          <span className="desc_infor_product_title">{product.title}</span>{" "}
          <br></br>
          <span className="desc_infor_product_price">
            {product.price}$
          </span>{" "}
          <br></br>
          <span className="desc_infor_product_desc">{product.description}</span>
          <button
            className="add_button"
            onClick={() => confirmAddProduct(product)}
          >
            Thêm vào giỏ hàng
          </button>
          <div className="desc-product-options">
            <p>
              {" "}
              Số lượng muốn mua : <b>{count}</b>
            </p>
            <button disabled={count === 1} onClick={() => setCount(count - 1)}>
              -
            </button>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DescProduct;
