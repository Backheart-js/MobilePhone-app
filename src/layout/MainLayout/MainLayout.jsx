import React from 'react'
import PropTypes from 'prop-types'

import Modal from '~/components/Modal'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './MainLayout.scss'

function MainLayout({ children }) {
  return (
    <div className='relative'>
        <Header />
        <main id="main">
          {children}
        </main>
        <Footer />
        <Modal />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}
export default MainLayout