import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import './Footer.scss'

function Footer() {
  return (
    <footer id='footer-wrapper'>
      <div className="footer__box grid grid-cols-12 gap-2">
        <section className="footer__col col-span-3">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Tích điểm Quà tặng VIP
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Lịch sử mua hàng
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Tìm hiểu về mua trả góp
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Chính sách bảo hành
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Xem thêm
                <FontAwesomeIcon className="h-[20px] ml-1 text-xs" icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__col col-span-3">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Giới thiệu công ty (MWG.vn)
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Tuyển dụng
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Gửi góp ý, khiếu nại
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Tìm siêu thị (3.360 shop)
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Xem bản mobile
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__col col-span-3">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <strong className='mr-1'>Tổng đài hỗ trợ </strong>
              (Miễn phí gọi)
            </li>
            <li className="footer__menu-item">
              <span className='w-[72px] inline-block'>
                Gọi mua: 
              </span>
              <a href="/" className="footer__menu-link footer__phoneNumber">
                1800.1060
              </a>
              <span className="ml-1">
                (7:30 - 22:00)
              </span>
            </li>
            <li className="footer__menu-item">
              <span className='w-[72px] inline-block'>
                Kỹ thuật: 
              </span>
              <a href="/" className="footer__menu-link footer__phoneNumber">
                1800.1763
              </a>
              <span className="ml-1">
                (7:30 - 22:00)
              </span>
            </li>
            <li className="footer__menu-item">
              <span className='w-[72px] inline-block'>
                Khiếu nại: 
              </span>
              <a href="/" className="footer__menu-link footer__phoneNumber">
                1800.1062
              </a>
              <span className="ml-1">
                (8:00 - 21:30)
              </span>
            </li>
            <li className="footer__menu-item">
              <span className='w-[72px] inline-block'>
                Bảo hành: 
              </span>
              <a href="/" className="footer__menu-link footer__phoneNumber">
                1800.1064
              </a>
              <span className="ml-1">
                (8:00 - 21:00)
              </span>
            </li>
          </ul>
        </section>
        <section className="footer__col col-span-3">
          <div className="footer__logo-wrapper">
            <div className="footer__social-wrapper">
              <a href="" className="footer__social-link">
                
              </a>
            </div>
            <div className="footer__social-wrapper">
              <a href="" className="footer__social-link">
                
              </a>
            </div>
            <div className="footer__social-wrapper">
              <a href="" className="footer__social-link">
                
              </a>
            </div>
          </div>
          <div className="footer__logo-wrapper">
            
          </div>
          <div className="footer__logo-wrapper">

          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer