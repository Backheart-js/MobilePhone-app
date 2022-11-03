import React from 'react'
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

export default AdminLayout