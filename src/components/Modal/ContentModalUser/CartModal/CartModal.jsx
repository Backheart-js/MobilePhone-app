import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import formatPrice from "~/components/formatPrice";
import { cartSlice } from "~/redux/reducer/cartSlice";
import { modalSlice } from "~/redux/reducer/modalSlice";
import { productSelector } from "~/redux/selectors";
import './CartModal.scss'

function CartModal() {
  const dataProduct = useSelector(productSelector);
  const dispatch = useDispatch();
  const { catalog } = useParams();
  const [quantity, setQuantity] = useState(1)
  const cart = JSON.parse(localStorage.getItem("cart"));

  const minusBtnRef = useRef(null)

  const handleDecrease = () => {
    setQuantity(prev => prev - 1)
  }
  const handleIncrease = () => {
    setQuantity(prev => prev + 1)
  }
  const handleAddToCart = (dataProductAddToCart) => {
    const newData = {
      id: dataProductAddToCart.id,
      category: catalog,
      info: dataProductAddToCart,
      quantity: quantity
    };
    dispatch(cartSlice.actions.add(newData));
    dispatch(modalSlice.actions.close())
  }

  useEffect(() => {
    if (quantity === 1) {
      minusBtnRef.current.disabled = true;
      minusBtnRef.current.classList.add("disabled")
    } else {
      minusBtnRef.current.disabled = false;
      minusBtnRef.current.classList.remove("disabled")
    }

  }, [quantity])
  

  return (
    <div className="p-5">
      <div className="cart__header-wrapper pb-4">
        <p className="cart__title text-[16px] mb-2">Sản phẩm {dataProduct.name}</p>
        <div className="flex text-[14px]">
          <span className="text-[#d0021c] font-bold">
            {dataProduct.is_discount
              ? formatPrice(dataProduct.discount)
              : formatPrice(dataProduct.original_price)}
          </span>
          {dataProduct.is_discount && (
            <div className="ml-2">
              <span className="text-[#d0021c]">* </span>
              <span className="line-through text-[#666]">
                {formatPrice(dataProduct.original_price)}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="choose__color-wrapper mb-4">
        <div className="choose__color-title"><strong>Chọn màu:</strong></div>
        <ul className="choose__color-list grid grid-cols-6 py-4">
          {dataProduct.color.map((color, index) => (
            <li className="choose__color-item col-span-1 flex flex-col items-center" key={index}>
              <div className="image__wrapper w-[50px] h-[50px] flex justify-center items-center">
                <img src={dataProduct.image[index]} alt="" className="max-w-[40px] max-h-[40px]" />
              </div>
              <input type="radio" className="my-2" name="choose-color" />
              <span className="text-[11px] block overflow-hidden">
                {color}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="choose__quantity-wrapper flex items-center border-b pb-4">
        <strong className="">
          Chọn số lượng:
        </strong>
        <div className="quantity__tool-wrapper flex ml-2">
            <button ref={minusBtnRef} className="minus-btn" onClick={handleDecrease}>
              <FontAwesomeIcon className="cart-icon minus-icon" icon={faMinus} />
            </button>
            <div className="choose__quantity">
              <span className="">{quantity}</span>
            </div>
            <button className="plus-btn" onClick={handleIncrease}>
              <FontAwesomeIcon className="cart-icon plus-icon" icon={faPlus} />
            </button>
        </div>
      </div>
      <div className="funcbtn__wrapper mt-4">
        <button className="addtocart__btn uppercase" onClick={() => handleAddToCart(dataProduct)}><strong>Thêm vào giỏ hàng</strong></button>
        <div className="w-full py-4">
          <a href="/cart" className="w-full block text-[#288ad6] text-center">Xem giỏ hàng</a>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
