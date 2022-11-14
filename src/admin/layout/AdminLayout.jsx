import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

import Modal from '~/components/Modal'
import AdminHeader from './components/AdminHeader'
import { useNavigate } from 'react-router-dom';

function AdminLayout({ children }) {
  const navigate = useNavigate()
  //Check login status
  useEffect(() => {
    const isLogin = JSON.parse(sessionStorage.getItem('isLogin'))
  
    if (!isLogin) {
      navigate('/admin/login')
    }
  }, [])
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