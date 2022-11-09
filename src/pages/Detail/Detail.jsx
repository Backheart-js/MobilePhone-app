import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heroslider from "~/components/HeroSlider/HeroSlider";
import { modalSlice } from "~/redux/reducer/modalSlice";
import tgtdAPI from "~/utils/tgtdAPI";
import "./Detail.scss";
import * as images from "~/assets/image";
import formatPrice from "~/components/formatPrice";
import productProperties from "~/admin/proterties/properties";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCameraRetro,
  faCheck,
  faCube,
  faInfo,
  faRotate,
  faShareFromSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import ListProduct from "~/components/ListProduct";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "~/redux/reducer/productSlice";
import { cartSelector } from "~/redux/selectors";

function Detail() {
  const typeVietnamese = {
    dtdd: "Điện thoại",
    laptop: "Laptop",
    tablet: "Tablet",
    smartwatch: "Đồng hồ",
  };
  const imageSlider = Object.entries(images.product).map((image) => {
    return image[1];
  });
  const dispatch = useDispatch();
  const cartFromStore = useSelector(cartSelector)
  const { catalog, id } = useParams();
  const [dataProduct, setDataProduct] = useState({});

  const handleCartBtn = () => {
    dispatch(
      modalSlice.actions.open({ typeModal: "USER_cart", category: catalog })
    );
    dispatch(productSlice.actions.add(dataProduct))
  };

  useEffect(() => {
    const getDataProduct = async () => {
      try {
        window.screenTop = 0;
        console.log(window);
        const response = await tgtdAPI.getDetail(catalog, id);
        setDataProduct(response);
      } catch (error) {
        throw error;
      }
    };

    getDataProduct();
  }, [catalog, id]);

  localStorage.setItem('cart', JSON.stringify(cartFromStore));

  return (
    <div className="w-full content-box">
      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center">
          <span className="product__name">
            {typeVietnamese[catalog]} {dataProduct.name}
          </span>
          <div className="flex items-center ml-4">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="flex func-btn">
            <FontAwesomeIcon icon={faThumbsUp} className="text-white" />
            <span className="text-white">Thích</span>
          </button>
          <button className="flex func-btn">
            <FontAwesomeIcon icon={faShareFromSquare} className="text-white" />
            <span className="text-white">Chia sẻ</span>
          </button>
        </div>
      </div>
      <div className="detail__box-main">
        <div className="detail__main-infor-wrapper grid grid-cols-12 pt-1">
          <div className="detail__left-wrapper col-span-7">
            <div className="detail__slider-wrapper">
              <Heroslider imageList={imageSlider} />
            </div>
            <div className="my-4 flex justify-center">
              <a href="/" className="">
                <p className="text-[#2f80ed]">Xem tất cả hình</p>
              </a>
            </div>
            <ul className="detail__avatar-wrapper flex justify-center mt-4">
              <li className="detail__avatar-item">
                <button>
                  <div className="avatar__image-wrapper">
                    <FontAwesomeIcon
                      className="w-[70%] h-auto text-[#666]"
                      icon={faStar}
                    />
                  </div>
                  <p className="avatar__color-text">Điểm nổi bật</p>
                </button>
              </li>
              {dataProduct.color &&
                dataProduct.color.map((color, index) => (
                  <li className="detail__avatar-item" key={index}>
                    <button>
                      <div className="avatar__image-wrapper">
                        <img
                          src={dataProduct.image[index]}
                          alt=""
                          className=""
                        />
                      </div>
                      <p className="avatar__color-text">{color}</p>
                    </button>
                  </li>
                ))}
              <li className="detail__avatar-item">
                <button>
                  <div className="avatar__image-wrapper">
                    <FontAwesomeIcon
                      className="w-[70%] h-auto text-[#666]"
                      icon={faCameraRetro}
                    />
                  </div>
                  <p className="avatar__color-text">Ảnh từ camera</p>
                </button>
              </li>
              <li className="detail__avatar-item">
                <button>
                  <div className="avatar__image-wrapper">
                    <FontAwesomeIcon
                      className="w-[70%] h-auto text-[#666]"
                      icon={faCube}
                    />
                  </div>
                  <p className="avatar__color-text">Thông số kỹ thuật</p>
                </button>
              </li>
              <li className="detail__avatar-item">
                <button>
                  <div className="avatar__image-wrapper">
                    <FontAwesomeIcon
                      className="h-[60%] text-[#666]"
                      icon={faInfo}
                    />
                  </div>
                  <p className="avatar__color-text">Thông tin</p>
                </button>
              </li>
            </ul>
            <div className="policy__box grid grid-cols-2 mt-5 py-4 gap-4 pb-5">
              <div className="policy__wrapper flex">
                <div className="w-8">
                  <FontAwesomeIcon className="text-[#4a90e2]" icon={faRotate} />
                </div>
                <p className="pl-2 text-[14px]">
                  Hư gì đổi nấy <strong>12 tháng</strong> tại 3361 siêu thị toàn
                  quốc (miễn phí tháng đầu){" "}
                  <a href="/" className="text-[#4a90e2] leading-4 text-[15px]">
                    Xem chi tiết
                  </a>
                </p>
              </div>
              <div className="policy__wrapper flex">
                <div className="w-8">
                  <FontAwesomeIcon className="text-[#4a90e2]" icon={faCheck} />
                </div>
                <p className="pl-2 text-[14px]">
                  Bảo hành <strong>chính hãng điện thoại 1 năm</strong> tại các
                  trung tâm bảo hành hãng{" "}
                  <a href="/" className="text-[#4a90e2] leading-4 text-[15px]">
                    Xem địa chỉ
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="detail__right-wrapper col-span-5 ml-7">
            <div className="detail__price-wrapper mb-3">
              <p className="leading-[16px]">
                Giá tại
                <select className="bg-transparent border-none text-[#2f80ed] focus:ring-transparent">
                  <option value="" className="text-[#333]">
                    Hà Nội
                  </option>
                  <option value="" className="text-[#333]">
                    Đà Nẵng
                  </option>
                  <option value="" className="text-[#333]">
                    Hồ Chí Minh
                  </option>
                </select>
              </p>
              <div className="price flex mb-3">
                <span className="text-[#d0021c] text-[20px] font-bold">
                  {dataProduct.is_discount
                    ? formatPrice(dataProduct.discount)
                    : formatPrice(dataProduct.original_price)
                  }
                </span>
                {dataProduct.is_discount && (
                  <div className="ml-2">
                    <span className="text-[#d0021c] text-[18px]">* </span>
                    <span className="line-through text-[16px] text-[#666] leading-[24px]">
                      {formatPrice(dataProduct.original_price)}
                    </span>
                    <span className="text-[#d0021c] text-[18px] ml-2">
                      -
                      {(
                        100 -
                        Number(
                          (dataProduct.discount / dataProduct.original_price) *
                            100
                        )
                      ).toFixed()}
                      %
                    </span>
                  </div>
                )}
                <span className="bg-[#f1f1f1] text-[#333] text-xs flex items-center ml-3 px-2 rounded">
                  Trả góp 0%
                </span>
              </div>
              <div className="promotion__wrapper">
                <div className="promo__table">
                  <div className="promo__title-wrapper">
                    <p className="font-bold">Khuyến mại</p>
                    <p className="text-[12px] text-[#666] font-normal leading-4 mt-1">
                      Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 25/11
                    </p>
                  </div>
                  <div className="promo__content-wrapper">
                    <ul className="pt-[15px] px-[10px] pb-[10px] flex-col">
                      <li className="mb-[10px] flex">
                        <div className="w-5">
                          <span className="table-stt">1</span>
                        </div>
                        <div className="pl-2 leading-5 text-[15px]">
                          Thu cũ Đổi mới: Giảm đến 1.5 triệu (Tuỳ model máy cũ,
                          không áp dụng kèm giảm giá qua cổng thanh toán){" "}
                          <a
                            href="/"
                            className="text-[#4a90e2] leading-4 text-[15px]"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </li>
                      <li className="mb-[10px] flex">
                        <div className="w-5">
                          <span className="table-stt">2</span>
                        </div>
                        <div className="pl-2 leading-5 text-[15px]">
                          Giảm đến 35% cho iPad khi mua kèm iPhone (Tùy model &
                          không kèm khuyến mãi khác của iPad){" "}
                          <a
                            href="/"
                            className="text-[#4a90e2] leading-4 text-[15px]"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </li>
                      <li className="mb-[10px] flex">
                        <div className="w-5">
                          <span className="table-stt">3</span>
                        </div>
                        <div className="pl-2 leading-5 text-[15px]">
                          Cơ hội trúng 50 giải vàng (tổng giải thưởng đến 500
                          triệu){" "}
                          <a
                            href="/"
                            className="text-[#4a90e2] leading-4 text-[15px]"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </li>
                      <li className="mb-[10px] flex">
                        <div className="w-5">
                          <span className="table-stt">4</span>
                        </div>
                        <div className="pl-2 leading-5 text-[15px]">
                          Tặng suất mua Xe Đạp giảm đến 40% (không kèm khuyến
                          mại khác){" "}
                          <a
                            href="/"
                            className="text-[#4a90e2] leading-4 text-[15px]"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </li>
                      <li className="mb-[10px] flex">
                        <div className="w-5">
                          <span className="table-stt">5</span>
                        </div>
                        <div className="pl-2 leading-5 text-[15px]">
                          Tặng suất mua đồng hồ BeU, Haylou, Realme, Honor, Itel
                          giảm 30% (Không kèm khuyến mãi khác của đồng hồ)
                        </div>
                      </li>
                      <li className="mb-[10px] flex">
                        <div className="w-5">
                          <span className="table-stt">6</span>
                        </div>
                        <div className="pl-2 leading-5 text-[15px]">
                          Tặng suất mua Apple Watch giảm 20% (Không kèm khuyến
                          mãi khác của đồng hồ).
                        </div>
                      </li>
                      <li className="mb-[10px] flex">
                        <div className="w-5">
                          <span className="table-stt">7</span>
                        </div>
                        <div className="pl-2 leading-5 text-[15px]">
                          Giảm 50% gói Bảo hiểm rơi vỡ 6 tháng{" "}
                          <a
                            href="/"
                            className="text-[#4a90e2] leading-4 text-[15px]"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </li>
                      <li className="mb-[10px] flex">
                        <div className="w-5">
                          <span className="table-stt">8</span>
                        </div>
                        <div className="pl-2 leading-5 text-[15px]">
                          Nhập mã TGDD giảm 4% tối đa 200.000đ cho đơn hàng từ
                          500.000đ trở lên khi thanh toán qua Ví Moca trên ứng
                          dụng Grab{" "}
                          <a
                            href="/"
                            className="text-[#4a90e2] leading-4 text-[15px]"
                          >
                            Xem chi tiết
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="promo__footer-wrapper">
                    <p className="text-[14px] leading-5">
                      <span className="text-[#d0021c]">(*) </span>
                      Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc
                      biệt (0%, 0.5%, 1%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="addtocart__box grid grid-cols-2 gap-2">
              <div className="addtocart__wrapper col-span-2">
                <button className="addtocart__btn uppercase" onClick={handleCartBtn}>mua ngay</button>
              </div>
              <div className="payonline__wrapper">
                <button className="payonline__btn">
                  <p className="uppercase">Hỗ trợ trả góp 0%</p>
                  <p className="text-[12px]">Duyệt hồ sơ trong 5 phút</p>
                </button>
              </div>
              <div className="payonline__wrapper">
                <button className="payonline__btn">
                  <p className="uppercase">Trả góp 0% qua thẻ</p>
                  <p className="text-[12px]">Visa, Mastercard, JCB, Amex</p>
                </button>
              </div>
            </div>
            <div className="parameter__wrapper">
              <div className="parameter__title">
                <p className="parameter__title-text">
                  Cấu hình {typeVietnamese[catalog]} {dataProduct.name}
                </p>
              </div>
              <ul className="parameter__list">
                {dataProduct.properties &&
                  Object.entries(dataProduct.properties).map(
                    (parameter, index) => {
                      const propertyVietnamese = productProperties[catalog];
                      return (
                        <li
                          className="parameter__item"
                          key={index}
                          style={
                            index % 2 === 0
                              ? {
                                  backgroundColor: "#f5f5f5",
                                }
                              : {}
                          }
                        >
                          <span className="parameter-name">
                            {propertyVietnamese[parameter[0]]}
                          </span>
                          <span className="parameter-content">
                            {parameter[1]}
                          </span>
                        </li>
                      );
                    }
                  )}
              </ul>
            </div>
          </div>
        </div>

        <div className="suggest__product-wrapper my-5">
          <div className="suggest__header-wrapper flex justify-between">
            <div className="suggest__title">
              <span className="suggest__title-text">
                Xem thêm sản phẩm tương tự
              </span>
            </div>
            <div className="sugget__viewall">
              <a
                href={`/${catalog}?brand=${dataProduct.brand}`}
                className="text-[#4a90e2] leading-4 text-[15px]"
              >
                Xem tất tả
              </a>
            </div>
          </div>
          <div className="suggest__body-wrapper mx-[4px] mt-5">
            <ListProduct
              category={catalog}
              params={{
                brand: dataProduct.brand,
              }}
              limit={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
