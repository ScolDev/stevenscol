import React from 'react'
import PropTypes from 'prop-types'

import Header from '../organisms/header/Header'
import Footer from '../organisms/footer/Footer'

import './layout.sass'

const PageLayout = ({ children }) => (
  <>
    <main className="Main">
      <Header />
      <section className="Main__container">{children}</section>
      <Footer />
    </main>
  </>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageLayout
