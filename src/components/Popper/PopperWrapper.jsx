import React from 'react'
import PropTypes from 'prop-types';

import './PopperWrapper.scss'

function PopperWrapper({children}) {
  return (
    <div className="popper-wrapper">
      {children}
    </div>
  )
}

PopperWrapper.propTypes = {
  children: PropTypes.node.isRequired
}
export default PopperWrapper