import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './PosterSlickCarousel.scss'

function PosterSlickItem({ dataItem }) {
  return (
    <Link className='PosterSlickItem__link rounded-xl	px-2'>
      <img src={dataItem} alt="" className='rounded-xl w-full' />
    </Link>
  )
}

PosterSlickItem.propTypes = {
  dataItem: PropTypes.string.isRequired
}
export default PosterSlickItem