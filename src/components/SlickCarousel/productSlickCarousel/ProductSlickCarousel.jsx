import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types'
import Slider from 'react-slick';
import tgtdAPI from '~/utils/tgtdAPI';
import ItemProduct from '~/components/ItemProduct';

function ProductSlickCarousel({ catalog, parameter, className, ...props }) {
  const [dataItems, setDataItems] = useState([])
  
  useEffect(() => {
    const getDataProduct = async () => {
        const params = parameter
        try {
            const response = await tgtdAPI.getProductsList(catalog, params)
            setDataItems(response);
        } catch (error) {
            throw error
        }
    }    

    getDataProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <Slider
      className={`mx-[-8px] ${className}`}
      {...props}
    >
      {dataItems.map((dataItem, index) => (
        <ItemProduct dataProduct={dataItem} category={catalog} key={index} />
      ))}
    </Slider>
  )
}

ProductSlickCarousel.propTypes = {
  catalog: PropTypes.string.isRequired,
  parameter: PropTypes.object,
  className: PropTypes.string
}
export default ProductSlickCarousel;