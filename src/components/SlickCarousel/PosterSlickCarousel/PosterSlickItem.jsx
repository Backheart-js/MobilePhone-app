import React from 'react'
import { Link } from 'react-router-dom'

import './PosterSlickCarousel.scss'

function PosterSlickItem({ dataItem }) {
  return (
    <Link className='PosterSlickItem__link rounded-xl	px-2'>
      <img src={dataItem} alt="" className='rounded-xl w-full' />
    </Link>
  )
}

export default PosterSlickItem