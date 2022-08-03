import React from "react";
import {  useCart } from "react-use-cart"

const Cart = () =>{
    const { 
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    const done = () => {
        emptyCart()
        alert("Đặt hàng thành công")
    }
    if(isEmpty) return <><h1>Giỏ hàng trống</h1> <span>Vui lòng đặt sản phẩm</span></>
    return(
        <>
        <div className="cart_items">
    <h5>  Sản phẩm : {totalUniqueItems} - Tổng số lượng sản phẩm : {totalItems} </h5>
    <table>
        <tbody>

    {items.map((item, index) =>{
        return(
            
        <tr key={index}>
            <td>
                <img src={item.image} alt="hihi" style={{height: '20px' }}/>
            </td>
            <td> {item.title}</td>
            <td> ${item.price}</td>
            <td> Số lượng : {item.quantity}</td>
            <td>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeItem(item.id)}>Xóa</button> 
               
            </td>
        </tr>
        )
    })}
        </tbody>
    </table>
        </div>
        <div>
            <h5>Tổng giá tiền ${cartTotal}</h5>
            <button onClick={() => emptyCart()}>Xóa tất cả</button>
            <button onClick={() => done()}>Thanh toán</button>
        </div>
        </>

    )
}
export default Cart;