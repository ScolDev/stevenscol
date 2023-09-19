import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../organisms/header/Header'
import Footer from '../organisms/footer/Footer'

import './layout.sass'

const Layout = ({ children, noHeader }) => (
  <StaticQuery
    query={query}
    render={data => {
      const { social } = data.site.siteMetadata
      return (
        <>
          <main className='Main'>
            { !noHeader ? <Header /> : null }
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
  children: PropTypes.node.isRequired,
  noHeader: PropTypes.bool
}

Layout.defaultProps = {
  noHeader: false
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
  }`

export default Layout
