import React from "react";

import "./Home.scss";
import * as image from "~/assets/image";
import PosterSlickCarousel from "~/components/SlickCarousel/PosterSlickCarousel/PosterSlickCarousel";
import IndexTitle from "~/components/IndexTitle";
import CategoryBox from "./components/CategoryBox";
import TabProduct from "./components/TabProduct";
import ListProduct from "~/components/ListProduct";
import { tgtdCategory } from "~/utils/tgtdAPI";

function Home() {
  const category = [
    {
      image: "https://cdn.tgdd.vn//content/Laptop-129x129.png",
      title: "Laptop",
    },
    {
      image: "https://cdn.tgdd.vn//content/Tablet-128x129.png",
      title: "Tablet",
    },
    {
      image: "https://cdn.tgdd.vn//content/Donghothongminh-128x129.png",
      title: "Đồng hồ thông minh",
    },
    {
      image: "https://cdn.tgdd.vn//content/DT-128x129.png",
      title: "Điện thoại giá rẻ",
    },
    {
      image: "https://cdn.tgdd.vn//content/Donghothoitrang-128x129.png",
      title: "Đồng hồ thời trang",
    },
    {
      image: "https://cdn.tgdd.vn//content/Thietbimang-128x129.png",
      title: "Thiết bị mạng",
    },
    {
      image: "https://cdn.tgdd.vn//content/Oplung-128x128.png",
      title: "Ốp lưng",
    },
    {
      image: "https://cdn.tgdd.vn//content/chuot-128x129.png",
      title: "Chuột máy tính",
    },
    {
      image: "https://cdn.tgdd.vn//content/ban-phim-128x129.png",
      title: "Bàn phím",
    },
    {
      image: "https://cdn.tgdd.vn//content/Simthecao-129x129.png",
      title: "Sim, thẻ cào",
    },
    { image: "https://cdn.tgdd.vn//content/Loa-128x128.png", title: "Loa" },
    {
      image: "https://cdn.tgdd.vn//content/Tainghe-128x129.png",
      title: "Tai nghe",
    },
    {
      image: "https://cdn.tgdd.vn//content/Sacduphong-128x129.png",
      title: "Sạc dự phòng",
    },
    {
      image: "https://cdn.tgdd.vn//content/Capsac-129x129.png",
      title: "Cáp sạc",
    },
    {
      image: "https://cdn.tgdd.vn//content/Maytinhbo-128x129.png",
      title: "Máy tính bộ",
    },
    {
      image: "https://cdn.tgdd.vn//content/Mayin-128x129.png",
      title: "Máy in",
    },
    {
      image: "https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png",
      title: "Màn hình máy tính",
    },
    {
      image: "https://cdn.tgdd.vn//content/Phukiengaming-128x129.png",
      title: "Phụ kiện gaming",
    },
    {
      image: "https://cdn.tgdd.vn//content/icon-camera-128x129.png",
      title: "Camera, webcam",
    },
    {
      image: "https://cdn.tgdd.vn//content/may-chieu-icon-128x129.png",
      title: "Thiết bị nhà thông minh",
    },
  ];

  return (
    <div className="homecontent__wrapper w-full">
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

        <ul className="home__promo-wrapper grid grid-cols-4 gap-4 section-space">
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

        <section className="home__event-wrapper section-space">
          <p className="home__event-title">Tuần lễ Apple</p>
          <div className="home__event-posterSlick--wrapper">
            <PosterSlickCarousel
              className={"px-3 mb-[15px]"}
              posterImage={[
                "https://cdn.tgdd.vn/2022/10/banner/Banner-Iphone-14-380x200-1.png",
                "https://cdn.tgdd.vn/2022/10/banner/Banner-Iphone-11-380x200-1.png",
                "https://cdn.tgdd.vn/2022/10/banner/Artboard-2-380x200.png",
                "https://cdn.tgdd.vn/2022/10/banner/Banner-Iphone-13-Pro-Series-380x200-1.png",
                "https://cdn.tgdd.vn/2022/10/banner/macbook-tuan-le-apple-desk-2-380x200.png",
                "https://cdn.tgdd.vn/2022/10/banner/380x200-380x200-12.png",
                "https://cdn.tgdd.vn/2022/10/banner/Banner-Ipad-380x200-1.png",
              ]}
              infinite
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
            />
          </div>
          <div className="home__event-list px-3 my-4">
            <ListProduct category={tgtdCategory.dtdd} params={{brand: "Apple"}} limit={5} />
          </div>
          <a href="/dtdd?brand=Apple" className="seeAll__btn">
            Xem tất cả sản phẩm
          </a>
        </section>

        <section className="home__trending-wrapping section-space">
          <IndexTitle className={"home__trending-title"}>
            Xu hướng mua sắm
          </IndexTitle>
          <ul className="home__trending-list grid grid-cols-4 gap-2">
            <li className="home__trending-item col-span-1">
              <a href="/" className="home__trending-link">
                <img
                  src="https://cdn.tgdd.vn/2022/08/banner/Frame-4919-280x235.png"
                  alt=""
                  className="home__trending-img"
                />
                <span className="trending-category">Điện thoại</span>
                <strong className="trending-title">
                  Galaxy Z Fold4 | Z Flip4
                </strong>
              </a>
            </li>
            <li className="home__trending-item col-span-1">
              <a href="/" className="home__trending-link">
                <img
                  src="https://cdn.tgdd.vn/2022/10/banner/xh-mac-desk-moi-280x235.png"
                  alt=""
                  className="home__trending-img"
                />
                <span className="trending-category">Macbook</span>
                <strong className="trending-title">
                  Giá chỉ từ 22.990.000 đ
                </strong>
              </a>
            </li>
            <li className="home__trending-item col-span-1">
              <a href="/" className="home__trending-link">
                <img
                  src="https://cdn.tgdd.vn/2022/09/banner/Frame-47574-280x235.png"
                  alt=""
                  className="home__trending-img"
                />
                <span className="trending-category">Tai nghe không dây</span>
                <strong className="trending-title">Đặt ngay</strong>
              </a>
            </li>
            <li className="home__trending-item col-span-1">
              <a href="/" className="home__trending-link">
                <img
                  src="https://cdn.tgdd.vn/2022/10/banner/kidcare-s88-280x235.png"
                  alt=""
                  className="home__trending-img"
                />
                <span className="trending-category">
                  Đồng hồ định vị trẻ em
                </span>
                <strong className="trending-title">Mua ngay</strong>
              </a>
            </li>
          </ul>
        </section>

        <section className="home__category-wrapper section-space">
          <IndexTitle className={"px-[22px] py-[15px]"}>
            Danh mục nổi bật
          </IndexTitle>
          <div className="home__category-box grid grid-cols-10 px-10 pb-8">
            {category.map((product, index) => (
              <CategoryBox
                className={"py-2"}
                key={index}
                imgSrc={product.image}
                title={product.title}
              />
            ))}
          </div>
        </section>

        <section className="home__discount-online section-space">
          <IndexTitle className={"pb-[15px]"}>
            Giảm thêm khi thanh toán online
          </IndexTitle>
          <PosterSlickCarousel
            className={"mb-[15px]"}
            posterImage={[
              "https://cdn.tgdd.vn/2022/09/banner/VCBDesk--1--380x200.png",
              "https://cdn.tgdd.vn/2022/06/banner/EXB-500k-380x200.png",
              "https://cdn.tgdd.vn/2022/08/banner/VNPay-iPhone-iPad-380x200.png",
              "https://cdn.tgdd.vn/2022/10/banner/Desk--1--380x200.jpg",
              "https://cdn.tgdd.vn/2022/08/banner/380x200--1--380x200.jpg",
              "https://cdn.tgdd.vn/2022/06/banner/VNPay-Toan-bo-san-pham-380x200.png",
            ]}
            infinite
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
          />
        </section>

        <section className="home__suggest-products section-space">
          <IndexTitle className={"pb-[15px]"}>Gợi ý sản phẩm</IndexTitle>
          <TabProduct
            panels={[
              {
                image:
                  "https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/homev2/goiy-1.png",
                title: "Cho bạn",
                category: "dtdd",
                params: {
                  
                }
              },
              {
                image:
                  "https://cdn.tgdd.vn/2022/08/campaign/icon-xa-hang-50-50x50-2.png",
                title: "Xả hàng giảm sốc",
                category: "dtdd",
                params: {
                  is_discount: true,
                }
              },
              {
                image:
                  "https://cdn.tgdd.vn/2022/08/campaign/50x50-chi-giam-online-48x52-2.png",
                title: "Săn sale Online",
                category: "dtdd",
                params: {
                  is_discount: true,
                }
              },
              {
                image:
                  "https://cdn.tgdd.vn/2022/09/campaign/lap-50x54-50x54-2.png",
                title: "Laptop tựu trường",
                category: "laptop",
                params: {

                }
              }
            ]}
          />
        </section>

        <section className="home__trademark section-space">
          <IndexTitle className={'mb-[15px]'}>
            Chuyên trang thương hiệu
          </IndexTitle>
          <div className="home__trademark-box grid grid-cols-3 gap-3">
            <div className="home__trademark-item col-span-1">
              <a href="/" className="home__trademark-link">
                <img src="https://cdn.tgdd.vn/2022/10/banner/samsung-390-210-390x210.png" alt="" className="w-full rounded-xl" />
              </a>
            </div>
            <div className="home__trademark-item col-span-1">
              <a href="/" className="home__trademark-link">
                <img src="https://cdn.tgdd.vn/2022/07/banner/6BD1D926-AFFA-45E4-A5C6-DE9386EED1CB-390x210.png" alt="" className="w-full rounded-xl" />
              </a>
            </div>
            <div className="home__trademark-item col-span-1">
              <a href="/" className="home__trademark-link">
                <img src="https://cdn.tgdd.vn/2022/08/banner/lenovoLaptop-390x210-1.png" alt="" className="w-full rounded-xl" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
