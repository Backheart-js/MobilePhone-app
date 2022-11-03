import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "~/redux/reducer/modalSlice";
import { modalSelector } from "~/redux/selectors";
import ContentModalAdmin from "./ContentModalAdmin";
import ContentModalUser from "./ContentModalUser";

import "./Modal.scss";

function Modal() {
  const modalData = useSelector(modalSelector);
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(modalSlice.actions.close())
  }

  return (
    modalData.isShowing && (
      <div
        id="modal"
        className="fixed inset-0 flex justify-center items-center"
      >
        <main className="modal__content-box absolute bg-white max-w-[650px] min-w-[550px] min-h-[400px] rounded-lg">
          {/* modal header */}
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={handleClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {modalData.typeModal.includes("ADMIN") ? (
            <ContentModalAdmin />
          ) : (
            <ContentModalUser />
          )}
          {/* Modal footer */}
          <div className="flex items-center justify-end p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="w-[90px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Xác nhận
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
        </main>
      </div>
    )
  );
}

export default Modal;
