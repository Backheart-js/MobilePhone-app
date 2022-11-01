import React from 'react'
import AdminHeader from './components/AdminHeader'

function AdminLayout({ children }) {
  return (
    <div>
        <AdminHeader />
        <div className="mx-auto mt-20 max-w-[1220px]">
            {children}
        </div>
    </div>
  )
}

export default AdminLayout