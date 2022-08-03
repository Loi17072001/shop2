import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { GiRoundStar } from "react-icons/gi";
import { AiOutlineAccountBook } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Product = (props) => {
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();
  const [sort, setSort] = useState();

  useEffect(() => {
    API.getProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    API.getCategory().then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    API.sort().then((data) => setSort(data));
  }, []);

  useEffect(() => {
    API.asc().then((data) => setSort(data));
  }, []);

  const filterProducts = async (event) => {
    await fetch(
      "https://fakestoreapi.com/products/category/" + event.target.value)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const sortProduct = async (event) => {
    await fetch("https://fakestoreapi.com/products?sort" + `=` + event.target.value)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  // const priceSortDown = () => {
  //   const priceArray = products.sort((a, b) => {
  //     return b.price - a.price;
  //   });
  //   console.log(priceArray)
  //   setProducts(priceArray);
  // }
  // const priceSortUp = () => {
  //   const priceArray = products.sort((a, b) => {
  //     return a.price - b.price;
  //   });
  //   console.log(priceArray)
  //   setProducts(priceArray);

  // }
  const { addItem } = useCart();
  return (
    <>
      <div className="grid__row">
        <div className="select-input">
          <span className="select-input__label">Sắp xếp theo loại</span>
          <i className="select-input__icon fa-solid fa-chevron-down"></i>
          <select onChange={filterProducts}>
            {category?.map((cate, index) => {
              return (
                <>
                  <option value={cate}>{cate}</option>
                </>
              );
            })}
          </select>
          <br></br>
          <select onChange={sortProduct}>
            <span>Sắp xếp</span>
            <option value={"desc"}>Trên xuống</option>
            <option value={"asc"}>Dưới lên</option>
          </select>

          {/* <button onClick={() => filterProducts("women's clothing")}>women's clothing</button>
           */}
          {/* <button onClick={() => filterProducts("jewelery")}>jewelery</button> 
              <button onClick={() => filterProducts("electronics")}>electronics</button>  */}
          <br></br>
          {/* <span className="select-input__label">Sắp xếp</span> */}
          {/* <button onClick={() => priceSortDown()}> giá giảm dần</button>
          <button onClick={() => priceSortUp()}> giá tăng dần</button> */}
          {/* <button onClick={() => Sortt()}>Sắp xếp</button> */}
        </div>
        {products?.map((product, index) => {
          return (
            <div className="grid__column-2-4">
              <div className="home-product-item" key={index}>
                <div className="home-product-itemImg">
                  <img
                    alt="hihi"
                    className="home-product-item__img"
                    src={product.image}
                  />
                </div>
                <div className="home-product-item__name">{product.title}</div>
                <div className="home-product-item__price">
                  <span className="home-product-item__price-current">
                    {product.price}$
                  </span>
                </div>

                <div className="home-product-item__action">
                  <GiRoundStar className="icon icon_star" />
                  <div className="star">
                    {product.rating.rate}
                    Lượt sao
                  </div>
                  <AiOutlineAccountBook className="icon icon_count" />
                  <div className="star">
                    {product.rating.count}
                    Đã bán
                  </div>
                </div>
                <NavLink to={`/product/${product.id}`}>Xem chi tiết</NavLink>
                <button onClick={() => addItem(product)}>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Product;
