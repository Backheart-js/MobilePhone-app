import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import formatPrice from "~/components/formatPrice";
import { cartSlice } from "~/redux/reducer/cartSlice";
import tgtdAPI from "~/utils/tgtdAPI";

import "./Cart.scss";

function Cart() {
  let total = 0;
  const dispatch = useDispatch();
  const cart = JSON.parse(localStorage.getItem("cart"));

  const handleRemoveItem = (index) => {
    dispatch(cartSlice.actions.remove(index));
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart)); 
    window.location.reload();
  };

  const handlePay = () => {
    cart.forEach((item) => {
      const newQuantity = item.info.quantity - item.quantity;
      tgtdAPI.updateProduct(item.category, item.id, { quantity: newQuantity });
    });
    dispatch(cartSlice.actions.pay())
    localStorage.setItem("cart", JSON.stringify([])); 
    alert("Thanh toán thành công!");
    window.location.reload();
  };

  useEffect(() => {}, [cart]);

  return (
    <div className="bg-[#f3f3f3] pt-10 pb-20">
      <div className="max-w-[650px] mx-auto bg-white rounded-lg overflow-hidden">
        <div className="cart__title-wrapper">
          <FontAwesomeIcon icon={faCartShopping} className="cart__title-icon" />
          <p className="title select-none">Giỏ hàng của bạn</p>
        </div>
        {cart.length !== 0 ? (
          <>
            <div className="cart__list">
              <ul className="mt-5">
                {cart.map((item, index) => {
                  total += item.info.is_discount
                    ? item.info.discount * item.quantity
                    : item.info.original_price * item.quantity;
                  return (
                    <li className="cart__item flex" key={index}>
                      <div className="cartproduct__image-wrapper">
                        <img
                          className="w-[75px]"
                          src={item.info.image[0]}
                          alt=""
                        />
                      </div>
                      <div className="cart__name-wrapper w-[70%] block">
                        <a
                          href={`/${item.category}/${item.id}`}
                          className="cartproduct__name"
                        >
                          Sản phẩm {item.info.name}
                        </a>
                        <button
                          className="flex text-sm text-[#666] py-1 mt-1"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="translate-y-[25%]"
                          />
                          <span className="ml-2">Xóa</span>
                        </button>
                      </div>
                      <div className="cart__price-wrapper flex flex-col w-[15%]">
                        <div className="quantity">
                          <span className="">Số lượng: </span>
                          <span className="">{item.quantity}</span>
                        </div>
                        <div className="mt-1">
                          <span className="cartprice">
                            {item.info.is_discount
                              ? formatPrice(item.info.discount * item.quantity)
                              : formatPrice(
                                  item.info.original_price * item.quantity
                                )}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="cart__footer-wrapper py-[20px] px-[30px]">
              <div className="total__price-wrapper flex justify-between">
                <strong>Tổng tiền:</strong>
                <strong className="total__price">{formatPrice(total)}</strong>
              </div>
              <button className="pay-btn" onClick={handlePay}>
                Thanh toán
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center py-8">
              <img
                src="https://www.meerabasu.in/assets/images/empty-cart.png"
                alt=""
                className="select-none"
              />
              <a href="/" className="underline text-base text-[#2f80ed]">
                Tới trang mua sắm
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
