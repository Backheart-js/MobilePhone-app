import React, { useState, useEffect } from "react";

import "./AdminAdd.scss";
import { tgtdCategory } from "~/utils/tgtdAPI";
import productProperties from "../proterties/properties";

function AdminAdd() {
  const [category, setCategory] = useState(tgtdCategory.dtdd);
  const [properties, setProperties] = useState({});

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    setProperties(productProperties[category]);
  }, [category]);

  console.log(Object.values(properties));

  return (
    <div
      id="admin-add-product"
      className="flex flex-col items-center max-w-[1000px] mx-auto"
    >
      <header className="">
        <p className="font-semibold text-4xl select-none">Tạo sản phẩm mới</p>
      </header>
      <main className="w-full pb-20">
        <form
          action=""
          className="form__addProduct grid grid-cols-12 gap-5 mt-5"
        >
          <div className="flex items-center mb-6 col-span-12 pb-10 border-b border-gray-800">
            <label
              htmlFor="category"
              className="block mr-10 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Loại sản phẩm
            </label>
            <select
              name=""
              id="category"
              className="block py-2.5 px-0 flex-grow text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              onChange={handleCategory}
            >
              <option value={tgtdCategory.dtdd} className="">
                Điện thoại di động
              </option>
              <option value={tgtdCategory.laptop} className="">
                Laptop
              </option>
              <option value={tgtdCategory.tablet} className="">
                Tablet
              </option>
              <option value={tgtdCategory.smartwatch} className="">
                Đồng hồ thông minh
              </option>
            </select>
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Tên sản phẩm
            </label>
            <input type="text" className="custom-input" id="name" />
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="brand"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Hãng sản xuất
            </label>
            <input type="text" className="custom-input" id="brand" />
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="condition"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Tình trạng sản phẩm
            </label>
            <input type="text" className="custom-input" id="condition" />
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="is_discount"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Giảm giá?
            </label>
            <div className="radio-group">
              <div className="flex justify-center items-center mr-7">
                <input
                  type="radio"
                  className=""
                  id="is_discount1"
                  name="is_discount"
                />
                <label htmlFor="is_discount1" className="ml-2">
                  Có
                </label>
              </div>

              <div className="flex justify-center items-center">
                <input
                  type="radio"
                  className=""
                  id="is_discount2"
                  name="is_discount"
                />
                <label htmlFor="is_discount2" className="ml-2">
                  Không
                </label>
              </div>
            </div>
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="original_price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Giá gốc
            </label>
            <input type="text" className="custom-input" id="original_price" />
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="discount"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Giá sau giảm
            </label>
            <input type="text" className="custom-input" id="discount" />
          </div>
          <div className="mb-6 col-span-6">
            <label
              htmlFor="release_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Ngày phát hành
            </label>
            <input type="date" className="custom-input" id="release_date" />
          </div>
          <div className="mb-6 col-span-6">
            <label
              htmlFor="quantity"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Số lượng sản phẩm
            </label>
            <input type="number" className="custom-input" id="quantity" />
          </div>
          <div className="col-span-12 border-b border-gray-800"></div>
          <div className="mb-5 col-span-12 border-b border-gray-800 pb-10">
            <label
              htmlFor="release_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Ảnh sản phẩm
            </label>
            <textarea
              name=""
              className="custom-input"
              id="release_date"
              cols="30"
              rows="5"
              placeholder="Thả link ảnh ở đây"
            ></textarea>
          </div>
          <div className="mb-5 col-span-12 border-b border-gray-800 pb-10">
            <label
              htmlFor="color"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Màu sắc
            </label>
            <textarea
              name=""
              className="custom-input"
              id="color"
              cols="30"
              rows="5"
              placeholder="Nhập mã màu"
            ></textarea>
          </div>
          <div className="properties col-span-12 grid grid-cols-12 gap-5">
            {Object.values(properties).map((property, index) => (
              <div key={index} className="mb-5 col-span-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  {property}
                </label>
                <input type="text" className="custom-input" />
              </div>
            ))}
          </div>
        </form>
        <div className="flex justify-end w-full">
          <button
            to={"/admin/add"}
            type="button"
            className="flex items-center justify-center w-[120px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Thêm sản phẩm
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminAdd;
