import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Search from '~/component/Search';

import './Header.scss'

function Header() {
  return (
    <header id='header-wrapper'>
      <div className='header__box'>
        <div className="top__banner">
          <img src="https://cdn.tgdd.vn/2022/08/banner/1200-44-1200x44-11.png" alt="" className="top__banner-img" />
        </div>
        <div className="header__main-wrapper grid grid-cols-12 gap-4">
          <div className="header__logo-wrapper col-span-4">
            <a href="/" className="w-full h-full">
              <img className='w-[228px] h-full' src="https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG-B-H.png" alt="" />
            </a>
          </div>
          <div className="header__search-wrapper col-span-4">
            <Search />
          </div>
          <div className="header__cart-wrapper col-span-4">
            <div className="historyShopping__wrapper">
              <a href="" className="historyShopping__link">

              </a>
            </div>
            <div className="cart__wrapper">
              <a href="/cart" className="cart__link">
                <FontAwesomeIcon className='' icon={faCartShopping} />
              </a>
            </div>
          </div>
        </div>
        <div className="header__sub-wrapper"></div>
      </div>
    </header>
  )
}

export default Header