import { faCaretDown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Search from "~/components/Search";
import "./Header.scss";
import icons from "~/assets/Icons";

function Header() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  
  return (
    <header id="header-wrapper">
      <div className="header__box">
        <div className="top__banner">
          <img
            src="https://cdn.tgdd.vn/2022/08/banner/1200-44-1200x44-11.png"
            alt=""
            className="top__banner-img"
          />
        </div>
        <div className="header__main-wrapper grid grid-cols-12 gap-4">
          <div className="header__logo-wrapper col-span-4">
            <a href="/" className="block w-max">
              <img
                className="w-[228px] h-full"
                src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG-B-H.png"
                alt=""
              />
            </a>
          </div>
          <div className="header__search-wrapper col-span-4">
            <Search />
          </div>
          <div className="header__cart-wrapper h-full col-span-4 flex justify-end items-center">
            <div className="historyShopping__wrapper mr-[22px]">
              <a href="/" className="historyShopping__link">
                <span className="">Lịch sử đơn hàng</span>
              </a>
            </div>
            <div className="cart__wrapper mr-[22px]">
              {cart.length > 0 && (
                <div className="cart-quantity"><span>{cart.length}</span></div>
              )}
              <a href="/cart" className="cart__link flex">
                <div className="mr-2">
                  <FontAwesomeIcon
                    className="text-base text-[#333]"
                    icon={faCartShopping}
                  />
                </div>
                <span className="font-semibold">Giỏ hàng</span>
              </a>
            </div>
            <div className="func__wrapper">
              <a href="/" className="func__link">
                <span className="text-[16px] text-[#333] text-center">
                  24h Công nghệ
                </span>
              </a>
            </div>
            <div className="func__wrapper">
              <a href="/" className="func__link">
                <span className="text-[16px] text-[#333] text-center">
                  Hỏi đáp
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="header__sub-wrapper">
          <ul className="header__sub-list flex items-center justify-between">
            <li className="header__sub-item">
              <a href="/dtdd" className="header__sub-link flex">
                <i className="mr-1">
                  <img src={icons.phone} alt="" className="w-[20px] h-[20px]" />
                </i>
                <span className="text-[15px] leading-[20px] text-black">
                  Điện thoại
                </span>
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/laptop" className="header__sub-link flex">
                <i className="mr-1">
                  <img
                    src={icons.laptop}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </i>
                <span className="text-[15px] leading-[20px] text-black">
                  Laptop
                </span>
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/tablet" className="header__sub-link flex">
                <i className="mr-1">
                  <img
                    src={icons.tablet}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </i>
                <span className="text-[15px] leading-[20px] text-black">
                  Tablet
                </span>
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/smartwatch" className="header__sub-link flex">
                <i className="mr-1">
                  <img
                    src={icons.smart_watch}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </i>
                <span className="text-[15px] leading-[20px] text-black">
                  Smart watch
                </span>
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/phu-kien" className="header__sub-link flex">
                <i className="mr-1">
                  <img
                    src={icons.phu_kien}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </i>
                <span className="text-[15px] leading-[20px] text-black">
                  Phụ kiện
                </span>
                <FontAwesomeIcon
                  className="h-[20px] ml-1 text-xs"
                  icon={faCaretDown}
                />
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/" className="header__sub-link flex">
                <i className="mr-1">
                  <img
                    src={icons.dong_ho}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </i>
                <span className="text-[15px] leading-[20px] text-black">
                  Đồng hồ
                </span>
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/" className="header__sub-link flex">
                <i className="mr-1">
                  <img src={icons.pc} alt="" className="w-[20px] h-[20px]" />
                </i>
                <span className="text-[15px] leading-[20px] text-black">
                  Pc, máy in
                </span>
                <FontAwesomeIcon
                  className="h-[20px] ml-1 text-xs"
                  icon={faCaretDown}
                />
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/may-cu" className="header__sub-link flex">
                <span>Máy cũ giá rẻ</span>
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/" className="header__sub-link flex">
                <span>Sim, thẻ cào</span>
              </a>
            </li>
            <li className="header__sub-item">
              <a href="/" className="header__sub-link flex">
                <span>Dịch vụ tiện ích</span>
                <FontAwesomeIcon
                  className="h-[20px] ml-1 text-xs"
                  icon={faCaretDown}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
