import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.sass'

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { title, social } = data.site.siteMetadata
      return (
        <>
          <main className='Main'>
            <Header title={title} />
            <section className='Main-container'>
              {children}
            </section>
            <Footer social={social} />
          </main>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        social
      }
    }
  }`

export default Layout
