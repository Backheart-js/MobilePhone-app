import React from "react";

import "./Home.scss";
import * as image from "~/assets/image";
import PosterSlickCarousel from "~/components/SlickCarousel/PosterSlickCarousel/PosterSlickCarousel";

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
          className={'home__slick'}
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
              <img src="https://cdn.tgdd.vn//content/icon--96x104-2.png" alt="" className="home__promo-img" />
              <span className="">
                Săn Sale Online
              </span>
            </a>
          </li>
          <li className="home__promo-item col-span-1">
            <a href="/" className="home__promo-link">
              <img src="https://cdn.tgdd.vn//content/Group-46580-100x100-1.png" alt="" className="home__promo-img" />
              <span className="">
                Laptop tựu trường
              </span>
            </a>
          </li>
          <li className="home__promo-item col-span-1">
            <a href="/" className="home__promo-link">
              <img src="https://cdn.tgdd.vn//content/100x100-TGDD-100x100-1.png" alt="" className="home__promo-img" />
              <span className="">
                Halloween sale sốc
              </span>
            </a>
          </li>
          <li className="home__promo-item col-span-1">
            <a href="/" className="home__promo-link">
              <img src="https://cdn.tgdd.vn//content/dien-thoai-120x120-5.png" alt="" className="home__promo-img" />
              <span className="">
                Điện thoại độc quyền
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
