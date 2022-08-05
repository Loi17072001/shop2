import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const done = () => {
    emptyCart();
    alert("Đặt hàng thành công");
  };
  const confimDelete = (itemId) => {
    if (window.confirm("Chắc chưaaaaaaaaaaa ?")) {
      removeItem(itemId);
    }
  };
  const confimDeleteAll = () => {
    if (window.confirm("Chắc chưaaaaaaaaaaa ?")) {
      emptyCart();
    }
  };

  if (isEmpty)
    return (
      <>
        <h1>Giỏ hàng trống</h1>
        <br></br> <span>Vui lòng đặt sản phẩm</span>
      </>
    );
  return (
    <>
      <div className="cart">
        <div className="cart_items">
          <h5>
            {" "}
            Sản phẩm : {totalUniqueItems} - Tổng số lượng sản phẩm :{" "}
            {totalItems}{" "}
          </h5>
          <table>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        className="cart_items_img"
                        src={item.image}
                        alt="hihi"
                      />
                    </td>
                    <td> {item.title}</td>
                    <td> ${item.price}</td>
                    <td> Số lượng : {item.quantity}</td>
                    <td>
                      <button
                        disabled={item.quantity === 1}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="cartDele"
                        onClick={() => confimDelete(item.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="cart_pay">
          <h5>Tổng giá tiền ${cartTotal.toFixed(2)}</h5>
          <button onClick={() => confimDeleteAll()}>Xóa tất cả</button>
          <button onClick={() => done()}>Thanh toán</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
