import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "~/redux/reducer/productSlice";
import { modalSelector, productSelector } from "~/redux/selectors";
import productProperties from "~/admin/proterties/properties";
import tgtdAPI, { tgtdCategory } from "~/utils/tgtdAPI";
import { modalSlice } from "~/redux/reducer/modalSlice";

function UpdateModal() {
  const productDataFromStore = useSelector(productSelector);
  const modalDataFromStore = useSelector(modalSelector);
  const dispatch = useDispatch();
  const product_information = {
    name: "",
    brand: "",
    condition: "new",
    is_discount: false,
    discount: 0,
    original_price: 0,
    release_date: "",
    image: [],
    color: [],
    properties: {},
    status: true,
    quantity: 250,
  };

  const formRef = useRef();

  const [properties, setProperties] = useState({});
  const [dataProduct, setDataProduct] = useState(productDataFromStore);

  const handleFormChange = (e) => {
    let key = "",
      value = [];
    key = e.target.name;
    value = e.target.value.trim();

    if (e.target.name === "image" || e.target.name === "color") {
      value = e.target.value.split(",");
      dispatch(
        productSlice.actions.update({
          [key]: value,
        })
      );
    } else if (e.target.dataset.name === "properties") {
      dispatch(
        productSlice.actions.update({
          properties: {
            ...productDataFromStore.properties,
            [key]: value,
          },
        })
      );
    } else {
      dispatch(
        productSlice.actions.update({
          [key]: value,
        })
      );
    }
  };

  const handleClose = () => {
    dispatch(modalSlice.actions.close())
  }
  const handleUpdate = () => {
    let confirmAdd = window.confirm("Bạn có muốn cập nhật thông tin sản phẩm này?");

    if (confirmAdd) {
      try {
        tgtdAPI.updateProduct(modalDataFromStore.category, productDataFromStore.id, productDataFromStore)
        formRef.current.reset();
        alert("Đã cập nhật thành công");
      } catch (error) {
        alert("Lỗi: " + error);
      }
    }
  }

  useEffect(() => {
    setProperties(productProperties[modalDataFromStore.category]);
  }, []);
  console.log(productDataFromStore);
  return (
    <div
      id="admin-add-product"
      className="flex flex-col items-center pt-10 min-w-[850px] max-w-[1000px] mx-auto"
    >
      <header className="">
        <p className="font-semibold text-4xl select-none">
          Cập nhật thông tin sản phẩm
        </p>
      </header>
      <main className="w-full pb-5">
        <form
          ref={formRef}
          action=""
          className="form__addProduct grid grid-cols-12 gap-5 mt-5"
          onChange={handleFormChange}
        >
          <div className="mb-6 col-span-4">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Tên sản phẩm
            </label>
            <input
              value={productDataFromStore.name}
              type="text"
              className="custom-input"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="brand"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Hãng sản xuất
            </label>
            <input
              value={productDataFromStore.brand}
              type="text"
              className="custom-input"
              id="brand"
              name="brand"
            />
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="condition"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Tình trạng sản phẩm
            </label>
            <input
              value={productDataFromStore.condition}
              type="text"
              className="custom-input"
              id="condition"
              name="condition"
            />
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
                  value={true}
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
                  value={false}
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
            <input
              value={productDataFromStore.original_price}
              type="text"
              className="custom-input"
              id="original_price"
              name="original_price"
            />
          </div>
          <div className="mb-6 col-span-4">
            <label
              htmlFor="discount"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Giá sau giảm
            </label>
            <input
              value={productDataFromStore.discount}
              type="text"
              className="custom-input"
              id="discount"
              name="discount"
            />
          </div>
          <div className="mb-6 col-span-6">
            <label
              htmlFor="release_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Ngày phát hành
            </label>
            <input
              value={productDataFromStore.release_date}
              type="date"
              className="custom-input"
              id="release_date"
              name="release_date"
            />
          </div>
          <div className="mb-6 col-span-6">
            <label
              htmlFor="quantity"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Số lượng sản phẩm
            </label>
            <input
              value={productDataFromStore.quantity}
              type="number"
              className="custom-input"
              id="quantity"
              name="quantity"
            />
          </div>
          <div className="col-span-12 border-b border-gray-800"></div>
          <div className="mb-5 col-span-12 border-b border-gray-800 pb-10">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Ảnh sản phẩm
            </label>
            <textarea
              value={productDataFromStore.image}
              className="custom-input"
              id="image"
              name="image"
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
              name="color"
              className="custom-input"
              id="color"
              cols="30"
              rows="5"
              placeholder="Nhập mã màu"
            ></textarea>
          </div>
          <p className="text-2xl col-span-12 text-gray-700">
            Thông tin sản phẩm
          </p>
          <div className="properties col-span-12 grid grid-cols-12 gap-5">
            {Object.entries(properties).map((property, index) => (
              <div key={index} className="mb-5 col-span-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  {property[1]}
                </label>
                <input
                  value={productDataFromStore.properties[property[0]]}
                  type="text"
                  className="custom-input"
                  data-name="properties"
                  name={property[0]}
                />
              </div>
            ))}
          </div>
        </form>
      </main>
      {/* Modal footer */}
      <div className="w-full flex items-center justify-end py-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <button
          data-modal-toggle="defaultModal"
          type="button"
          className="w-[90px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleUpdate}
        >
          Cập nhật
        </button>
        <button
          data-modal-toggle="defaultModal"
          type="button"
          className="w-[90px] text-gay-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          onClick={handleClose}
        >
          Hủy
        </button>
      </div>
    </div>
  );
}

export default UpdateModal;
