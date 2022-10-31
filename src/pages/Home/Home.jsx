import React from "react";

import "./Home.scss";
import * as image from "~/assets/image";
import PosterSlickCarousel from "~/components/SlickCarousel/PosterSlickCarousel/PosterSlickCarousel";
import IndexTitle from "~/components/IndexTitle";

function Home() {
  return (
    <div className="content__wrapper w-full">
      <section className="mainBanner__wrapper w-full">
        <a href="/events/mua-sam-online">
          <img
            src={image.banner.bigBanner}
            alt="Mua sắm online"
            className="mainBanner"
          />
        </a>
      </section>
      <div className="mainContent__wrapper">
        <PosterSlickCarousel
          className={"home__slick"}
          posterImage={[
            image.poster.apple,
            image.poster.vivo,
            image.poster.oppo,
            image.poster.realme,
          ]}
          infinite
          speed={500}
          slidesToShow={2}
          slidesToScroll={2}
        />

        <ul className="home__promo-wrapper grid grid-cols-4 gap-4">
          <li className="home__promo-item col-span-1">
            <a href="/" className="home__promo-link">
              <img
                src="https://cdn.tgdd.vn//content/icon--96x104-2.png"
                alt=""
                className="home__promo-img"
              />
              <span className="">Săn Sale Online</span>
            </a>
          </li>
          <li className="home__promo-item col-span-1">
            <a href="/" className="home__promo-link">
              <img
                src="https://cdn.tgdd.vn//content/Group-46580-100x100-1.png"
                alt=""
                className="home__promo-img"
              />
              <span className="">Laptop tựu trường</span>
            </a>
          </li>
          <li className="home__promo-item col-span-1">
            <a href="/" className="home__promo-link">
              <img
                src="https://cdn.tgdd.vn//content/100x100-TGDD-100x100-1.png"
                alt=""
                className="home__promo-img"
              />
              <span className="">Halloween sale sốc</span>
            </a>
          </li>
          <li className="home__promo-item col-span-1">
            <a href="/" className="home__promo-link">
              <img
                src="https://cdn.tgdd.vn//content/dien-thoai-120x120-5.png"
                alt=""
                className="home__promo-img"
              />
              <span className="">Điện thoại độc quyền</span>
            </a>
          </li>
        </ul>

        <div>
          <img
            src="https://cdn.tgdd.vn/2022/09/banner/desk-1200x100-1200x100-1.png"
            alt=""
            className="w-full"
          />
        </div>

        <section className="home__event-wrapper">
          <p className="home__event-title">Tuần lễ Apple</p>
          <div className="home__event-posterSlick--wrapper">
            <PosterSlickCarousel
              className={"mx-2 mb-[15px]"}
              posterImage={[
                'https://cdn.tgdd.vn/2022/10/banner/Banner-Iphone-14-380x200-1.png',
                'https://cdn.tgdd.vn/2022/10/banner/Banner-Iphone-11-380x200-1.png',
                'https://cdn.tgdd.vn/2022/10/banner/Artboard-2-380x200.png',
                'https://cdn.tgdd.vn/2022/10/banner/Banner-Iphone-13-Pro-Series-380x200-1.png',
                'https://cdn.tgdd.vn/2022/10/banner/macbook-tuan-le-apple-desk-2-380x200.png',
                'https://cdn.tgdd.vn/2022/10/banner/380x200-380x200-12.png',
                'https://cdn.tgdd.vn/2022/10/banner/Banner-Ipad-380x200-1.png',
              ]}
              infinite
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
            />
          </div>
          <a href="/dtdd?brand=Apple" className="seeAll__btn">
            Xem tất cả sản phẩm
          </a>
        </section>

        <section className="home__trending-wrapping">
          <IndexTitle className={'home__trending-title'}>
            Xu hướng mua sắm
          </IndexTitle>
          <ul className="home__trending-list grid grid-cols-4 gap-2">
            <li className="home__trending-item col-span-1">
              <a href="/" className="home__trending-link">
                <img src="https://cdn.tgdd.vn/2022/08/banner/Frame-4919-280x235.png" alt="" className="home__trending-img" />
                <span className="trending-category">Điện thoại</span>
                <strong className="trending-title">Galaxy Z Fold4 | Z Flip4</strong>
              </a>
            </li>
            <li className="home__trending-item col-span-1">
              <a href="/" className="home__trending-link">
                <img src="https://cdn.tgdd.vn/2022/10/banner/xh-mac-desk-moi-280x235.png" alt="" className="home__trending-img" />
                <span className="trending-category">Macbook</span>
                <strong className="trending-title">Giá chỉ từ 22.990.000 đ</strong>
              </a>
            </li>
            <li className="home__trending-item col-span-1">
              <a href="/" className="home__trending-link">
                <img src="https://cdn.tgdd.vn/2022/09/banner/Frame-47574-280x235.png" alt="" className="home__trending-img" />
                <span className="trending-category">Tai nghe không dây</span>
                <strong className="trending-title">Đặt ngay</strong>
              </a>
            </li>
            <li className="home__trending-item col-span-1">
              <a href="/" className="home__trending-link">
                <img src="https://cdn.tgdd.vn/2022/10/banner/kidcare-s88-280x235.png" alt="" className="home__trending-img" />
                <span className="trending-category">Đồng hồ định vị trẻ em</span>
                <strong className="trending-title">Mua ngay</strong>
              </a>
            </li>
          </ul>
        </section>

        <section className="home__discount-online">
          <IndexTitle className={'pb-[15px]'}>
            Giảm thêm khi thanh toán online
          </IndexTitle>
          <PosterSlickCarousel
            className={"mx-[-8px] mb-[15px]"}
            posterImage={[
              'https://cdn.tgdd.vn/2022/09/banner/VCBDesk--1--380x200.png',
              'https://cdn.tgdd.vn/2022/06/banner/EXB-500k-380x200.png',
              'https://cdn.tgdd.vn/2022/08/banner/VNPay-iPhone-iPad-380x200.png',
              'https://cdn.tgdd.vn/2022/10/banner/Desk--1--380x200.jpg',
              'https://cdn.tgdd.vn/2022/08/banner/380x200--1--380x200.jpg',
              'https://cdn.tgdd.vn/2022/06/banner/VNPay-Toan-bo-san-pham-380x200.png',
            ]}
            infinite
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
