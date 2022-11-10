import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "~/redux/reducer/modalSlice";
import { modalSelector } from "~/redux/selectors";
import ContentModalAdmin from "./ContentModalAdmin";
import ContentModalUser from "./ContentModalUser";

import "./Modal.scss";

function Modal(props) {
  const modalDataFromStore = useSelector(modalSelector);
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(modalSlice.actions.close())
  }

  return (
    
      <div
        id="modal"
        className={`fixed inset-0 overflow-x-scroll ${modalDataFromStore.isShowing ? "active" : ""}`}
      >
        <main className="modal__content-box absolute top-[20%] bg-white max-w-[1150px] min-w-[550px] min-h-[400px] rounded-lg">
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

          {modalDataFromStore.typeModal.includes("ADMIN") ? (
            <ContentModalAdmin category={props.category}/>
          ) : (
            <ContentModalUser />
          )}
          
        </main>
      </div>
    
  );
}

export default Modal;
