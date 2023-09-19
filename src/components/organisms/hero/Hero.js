import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import SocialMedia from '../../social-media'

import './Hero.sass'
import { StaticQuery, graphql } from 'gatsby'
import ProfileWidget from '../../molecules/profile-widget/ProfileWidget'

function Hero () {
  return (
    <StaticQuery
      query={query}
      render={({ heroImage, profilePhoto, site }) => {
        const { siteMetadata } = site
        const image = getImage(heroImage)?.images.fallback?.src || ''
        const style = {
          backgroundImage: `url(${image})`
        }

        return (
          <div
            className="Hero"
            style={style}
          >
            <div className="Hero__wrapper">
              <div className="Hero__content">
                <div className="Hero__banner">
                  <ProfileWidget />
                </div>
                <div className="Hero__extra">
                  <div className="Hero__social white-box">
                    <SocialMedia social={siteMetadata.social} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export default Hero

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "images/hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    site {
      siteMetadata {
        author
        youtubeChannel
        social {
          name
          url
        }
      }
    }
  }
`
