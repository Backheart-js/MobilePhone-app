import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import './PosterSlickCarousel.scss';
import PosterSlickItem from './PosterSlickItem';

function PosterSlickCarousel({ posterImage = [], className, ...props }) {
  const [dataItems, setDataItems] = useState([])
  
  useEffect(() => {
    setDataItems(posterImage)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
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