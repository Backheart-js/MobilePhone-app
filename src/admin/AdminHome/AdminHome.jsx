import { faPen, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { modalSlice } from "~/redux/reducer/modalSlice";
import { productSlice } from "~/redux/reducer/productSlice";

import tgtdAPI, { tgtdCategory } from "~/utils/tgtdAPI";

function AdminHome() {
  const [dataFromApi, setDataFromApi] = useState([]);
  const [categoryIsShowing, setCategoryIsShowing] = useState(tgtdCategory.dtdd);

  const dispatch = useDispatch();

  const handleOptionChange = (e) => {
    setCategoryIsShowing(e.target.value);
  };

  const handleUpdate = (payload, id) => {
    console.log(payload);
    const getDetailProduct = async () => {
      try {  
        const response = await tgtdAPI.getDetail(categoryIsShowing, id)
        dispatch(productSlice.actions.add(response))
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(modalSlice.actions.open(payload));
    getDetailProduct();
  }

  const handleDelete = (id, category = categoryIsShowing) => {
    let confirmRemove = window.confirm("Bạn có muốn xóa sản phẩm này?");

    if (confirmRemove) {
      try {
        tgtdAPI.removeProduct(category, id)
        alert("Đã xóa sản phẩm")
      } catch (error) {
        alert("Lỗi: " + error)
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      const response = await tgtdAPI.getProductsList(categoryIsShowing);
      setDataFromApi(response);
    };

    getData();
  }, [categoryIsShowing]);

  return (
    <div id="admin-home">
      <div className="table__filter-wrapper w-[200px] pl-2 mb-10">
        <label
          htmlFor="underline_select"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Danh mục
        </label>
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange={handleOptionChange}
        >
          <option value={tgtdCategory.dtdd}>Điện thoại</option>
          <option value={tgtdCategory.laptop}>Laptop</option>
          <option value={tgtdCategory.tablet}>Tablet</option>
          <option value={tgtdCategory.smartwatch}>Đồng hồ thông minh</option>
        </select>
      </div>

      <div className="addWrapper mb-4">
        <Link to={"/admin/add"} type="button" className="flex items-center justify-center w-[140px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <FontAwesomeIcon icon={faPlus} className="text-white mr-1" />
          Thêm sản phẩm
        </Link>
      </div>

      {/* table */}
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Tên sản phẩm
              </th>
              <th scope="col" className="py-3 px-6">
                Tên hãng
              </th>
              <th scope="col" className="py-3 px-6">
                Giá
              </th>
              <th scope="col" className="py-3 px-6">
                Số lượng
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {dataFromApi.map((product) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={product.id}>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.id}
                </th>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.name}
                </th>
                <td className="py-4 px-6">{product.brand}</td>
                <td className="py-4 px-6">
                  {product.is_discount ? product.discount : product.original_price} VND
                </td>
                <td className="py-4 px-6">{product.quantity} sản phẩm</td>
                <td className="py-4 px-6">
                  <div className="h-full flex justify-center items-center">
                    <button
                      type="button"
                      className="flex items-center justify-center focus:outline-none text-white w-[90px] bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      onClick={() => handleUpdate({
                        typeModal: "ADMIN_update",
                        category: categoryIsShowing
                      }, product.id)}
                    >
                      <FontAwesomeIcon icon={faPen} className="text-white mr-1" />
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center focus:outline-none text-white w-[90px] bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => handleDelete(product.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} className="text-white mr-1" />
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminHome;
