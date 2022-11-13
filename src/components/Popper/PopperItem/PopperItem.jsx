import React from "react";
import PropTypes from "prop-types";
import formatPrice from "~/components/formatPrice";
import './PopperItem.scss'

function PopperItem({ data, catalog, ...props }) {
  const price = data.is_discount ? formatPrice(data.discount) : formatPrice(data.original_price);

  return (
    <a href={`/${catalog}/${data.id}`} className="popper__item-wrapper" {...props}>
      <div className="popper__img-wrapper">
        <img src={data.image[0]} alt="" className="" />
      </div>
      <div className="popper__info-wrapper">
        <div className="popper__name-wrapper">
          <p className="">{data.name}</p>
        </div>
        <div className="popper__price-wrapper flex items-center mt-1">
          {data.is_discount ? (
            <div className="flex">
              <span className="font-bold">{price}</span>
              <span className="line-through ml-2 text-sm">
                {formatPrice(data.original_price)}    
              </span>
            </div>
          ) : (
            <span className="">{price}</span>
          )}
        </div>
      </div>
    </a>
  );
}

PopperItem.propTypes = {
  data: PropTypes.object.isRequired,
  catalog: PropTypes.string.isRequired
};
export default PopperItem;
