import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SocialMedia from '../../molecules/social-media/SocialMedia'

import './Footer.sass'

const Footer = () => (
  <StaticQuery
    query={query}
    render={({ site }) => {
      const { social } = site.siteMetadata
      return (
        <footer className="Footer Section">
          <div className="Footer__info">
            <span>Desarrollado con amor con Gatsby</span>
          </div>
          <div className="Footer__socialMedia">
            <SocialMedia social={social} />
          </div>
        </footer>
      )
    }}
  />
)

export default Footer

const query = graphql`
  {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
  }
`
