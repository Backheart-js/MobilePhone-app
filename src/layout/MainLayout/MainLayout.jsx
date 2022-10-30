import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
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