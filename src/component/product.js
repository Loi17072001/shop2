import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { GiRoundStar } from "react-icons/gi";
import { AiOutlineAccountBook } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();
  const [sort, setSort] = useState();
  const { addItem } = useCart();

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
    if (event.target.value) {
      await fetch(
        "https://fakestoreapi.com/products/category/" + event.target.value
      )
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } else {
      API.getProducts().then((data) => setProducts(data));
    }
  };
  const sortProduct = async (event) => {
    await fetch(
      "https://fakestoreapi.com/products?sort"`+``=` + event.target.value
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const priceSortDown = () => {
    const priceArray = products.sort((a, b) => {
      return b.price - a.price;
    });
    setProducts([...priceArray]);
  };
  const priceSortUp = () => {
    const priceArray = products.sort((a, b) => {
      return a.price - b.price;
    });
    setProducts([...priceArray]);
  };
  const confirmAddProduct = (hi) => {
    if (window.confirm("Chắc chưaaaaaaaaaaa ?")) {
      addItem(hi);
    }
  };
  return (
    <>
      <div className="grid__row">
        <div className="select-input">
          <span className="select-input__label">Tìm kiếm theo loại</span>
          <i className="select-input__icon fa-solid fa-chevron-down"></i>
          <select onChange={filterProducts}>
            <option value="">Tất cả</option>
            {category?.map((cate, index) => {
              return (
                <>
                  <option value={cate}>{cate}</option>
                </>
              );
            })}
          </select>
          <br></br>
          <span>Sắp xếp theo</span>
          <select onChange={sortProduct}>
            <option value={"desc"}>Trên xuống</option>
            <option value={"asc"}>Dưới lên</option>
          </select>
          <span>Sắp xếp giá</span>
          <button onClick={() => priceSortUp()}>Từ thấp đến cao</button>
          <button onClick={() => priceSortDown()}>Từ cao đến thấp</button>
        </div>
        <div className="all_product">
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
                  <button onClick={() => confirmAddProduct(product)}>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;
