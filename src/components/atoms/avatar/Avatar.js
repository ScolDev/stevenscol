import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import './Avatar.sass'

const Avatar = (props) => {
  return (
    <StaticQuery
      query={query}
      render={({ profilePhoto }) => {
        const avatar = getImage(profilePhoto)

        return (
          <>
            <article className="Avatar">
              <GatsbyImage
                className='Avatar__image Avatar__image--rounded'
                image={ avatar }
                alt="ScolDev"
                {...props}
              />
            </article>
          </>
        )
      }}
    />
  )
}

export default Avatar

export const query = graphql`
  {
    profilePhoto: file(relativePath: { eq: "images/me.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400, layout: CONSTRAINED)
      }
    }
  }
`
