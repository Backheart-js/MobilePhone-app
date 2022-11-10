import React from "react";
import PropTypes from 'prop-types'

import './CategoryBox.scss';

function CategoryBox({ imgSrc, title, link, className, ...props }) {
  return (
    <div className={className} {...props}>
      <a href={link} className="category-link">
        <div className="category__img-wrapper">
          <img className="category__img" src={imgSrc} alt="" />
        </div>
        <span className="text-center px-1 text-sm">{title}</span>
      </a>
    </div>
  );
}

CategoryBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string
}
export default CategoryBox;
