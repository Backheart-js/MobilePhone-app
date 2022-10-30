import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import './PosterSlickCarousel.scss';
import PosterSlickItem from './PosterSlickItem';

function PosterSlickCarousel({ isProduct = false, posterImage = [], className, ...props }) {
  const [dataItems, setDataItems] = useState([])
  
  useEffect(() => {
    if (!isProduct) {
      setDataItems(posterImage)
    }
  
    return () => {
      
    }
  }, [])
  

  return (
    <Slider
      className={className}
      {...props}
    >
      {dataItems.map((dataItem, index) => (
        <PosterSlickItem dataItem={dataItem} key={index} />
      ))}
    </Slider>
  )
}

export default PosterSlickCarousel;