import React from 'react'
import PropTypes from 'prop-types'
import './IndexTitle.scss'

function IndexTitle({ className, children }) {
  return (
    <strong className={`TitleIndex ${className}`}>
        {children}
    </strong>
  )
}

IndexTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default IndexTitle