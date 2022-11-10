import React from 'react'
import PropTypes from 'prop-types';

import Modal from '~/components/Modal'
import AdminHeader from './components/AdminHeader'

function AdminLayout({ children }) {
  return (
    <div className='relative'>
        <AdminHeader />
        <div className="mx-auto mt-20 max-w-[1220px]">
            {children}
        </div>
        <Modal />
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired
}
export default AdminLayout