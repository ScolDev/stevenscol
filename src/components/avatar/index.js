import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import './index.sass'

const Avatar = ({ widget }) => {
  return (
    <StaticQuery
      query={query}
      render={({ profilePhoto }) => {
        const { childImageSharp } = profilePhoto
        return (
          <>
          <article className="Avatar">
            <GatsbyImage image={childImageSharp.gatsbyImageData} />
          </article>
          </>
        )
      }}
    />
  )
}

Avatar.propTypes = {
  widget: PropTypes.bool
}

export default Avatar

export const query = graphql`
  {
    profilePhoto: file(relativePath: {eq: "images/me.png"}) {
      childImageSharp {
        gatsbyImageData(width: 400, layout: CONSTRAINED)
      }
    }
  }
`
