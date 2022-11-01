import React, { useState } from "react";

import "./TabProduct.scss";
import PropTypes from "prop-types";

function TabProduct({ panels = [] }) {
  const [tabIndexIsActive, setTabIndexIsActive] = useState(0);

  const handleChangeTab = (e) => {
    setTabIndexIsActive(Number(e.target.closest(".panel__item").dataset.index));
    //e.target.closest(".panel__item").dataset.index sẽ trả về 1 số nhưng là kiểu String
  };

  return (
    <div id="tabProduct">
      <div className="tab__panels-wrapper flex justify-between items-center">
        {panels.map((panel, index) => (
          <button
            href="/"
            className={`panel__item flex justify-center items-center ${
              index === tabIndexIsActive ? "active" : ""
            }`}
            data-index={index}
            key={index}
            onClick={handleChangeTab}
          >
            <div className="">
              <img src={panel.image} alt="" className="panel__img" />
            </div>
            <span className="panel__title">{panel.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TabProduct;
