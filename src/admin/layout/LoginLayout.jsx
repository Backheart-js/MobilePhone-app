import React from 'react';
import PropTypes from 'prop-types';

function LoginLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  )
}

LoginLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default LoginLayout