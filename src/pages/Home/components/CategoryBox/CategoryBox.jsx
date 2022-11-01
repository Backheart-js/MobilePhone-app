import React from "react";
import PropTypes from 'prop-types'

import './CategoryBox.scss';

function CategoryBox({ imgSrc, title, className, ...props }) {
  return (
    <div className={className} {...props}>
      <a href="/" className="category-link">
        <div className="category__img-wrapper">
          <img className="category__img" src={imgSrc} alt="" />
        </div>
        <span className="text-center px-1 text-sm">{title}</span>
      </a>
    </div>
  );
}

export default CategoryBox;
