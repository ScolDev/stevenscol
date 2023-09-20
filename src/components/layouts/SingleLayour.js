import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../organisms/footer/Footer'

import './layout.sass'

const SingleLayout = ({ children }) => (
  <>
    <main className="Main">
      <section className="Main__container">{children}</section>
      <Footer />
    </main>
  </>
)

SingleLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default SingleLayout
