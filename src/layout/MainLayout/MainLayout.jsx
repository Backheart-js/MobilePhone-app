import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

function MainLayout({ children }) {
  return (
    <div>
        <Header />
          {children}
        <Footer />
    </div>
  )
}

export default MainLayout