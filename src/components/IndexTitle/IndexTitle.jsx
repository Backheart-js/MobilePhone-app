import React from 'react'
import './IndexTitle.scss'

function IndexTitle({ className, children }) {
  return (
    <strong className={`TitleIndex ${className}`}>
        {children}
    </strong>
  )
}

export default IndexTitle