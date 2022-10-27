import React from 'react'

import Footer from '../component/Footer'
import Header from '../component/Header'
import './MainLayout.scss'

function MainLayout({ children }) {
  return (
    <div>
        <Header />
        <main id="main">
          {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout