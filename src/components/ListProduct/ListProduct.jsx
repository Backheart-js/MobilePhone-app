import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import tgtdAPI, { tgtdCategory } from "~/utils/tgtdAPI";
import ItemProduct from "../ItemProduct";

function ListProduct({ category, params = {}, limit }) {
  const [dataProduct, setdataProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await tgtdAPI.getProductsList(category, params);
        setdataProduct(response.slice(0, limit))
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, params]);
  
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4">
      {dataProduct.map((data, index) => (
          <ItemProduct dataProduct={data} category={category} key={index} />
        )
      )}
    </div>
  );
}

export default ListProduct;
