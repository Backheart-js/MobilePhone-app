import React, { useState } from "react";

import "./TabProduct.scss";
import PropTypes from "prop-types";
import ListProduct from "~/components/ListProduct";
import { tgtdCategory } from "~/utils/tgtdAPI";

function TabProduct({ panels = [] }) {
  const [tabIndexIsActive, setTabIndexIsActive] = useState(0);
  const [category, setCategory] = useState(tgtdCategory.dtdd);
  const [params, setParams] = useState({})

  const handleChangeTab = (index, category, params) => {
    setTabIndexIsActive(index);
    setCategory(category);
    setParams(params);
  };
  console.log(category, params);

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
            data-category={panel.category}
            data-params={panel.params}
            key={index}
            onClick={() => handleChangeTab(index, panel.category, panel.params)}
          >
            <div className="">
              <img src={panel.image} alt="" className="panel__img" />
            </div>
            <span className="panel__title">{panel.title}</span>
          </button>
        ))}
      </div>
      <div className="tab__body-wrapper pt-4">
        <ListProduct category={category} params={params} limit={10}/>
      </div>
    </div>
  );
}

TabProduct.propTypes = {
  panels: PropTypes.array
}
export default TabProduct;
