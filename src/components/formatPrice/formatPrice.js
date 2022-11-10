import PropTypes from 'prop-types';

const formatPrice = (price) => {
    return Number(price).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      })
}

formatPrice.propTypes = {
  price: PropTypes.number
}

export default formatPrice;