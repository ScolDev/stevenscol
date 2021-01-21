import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import CV from '../../assets/cv.pdf'
import './me.sass'

const Me = (props) => {

  return (
    <StaticQuery query={ query } render={ ({ profilePhoto, site }) => {
        return (
          <section className="Me">
            <div className="Me-photo">
              <Img fluid={ profilePhoto.childImageSharp.fluid } />
            </div>
            <div className="Me-bio">
              <h4>{ site.siteMetadata.author }</h4>
              <p>{ site.siteMetadata.bio }</p>
            </div>
            <div className="Me-resume">
              <a 
                href={ CV } 
                alt='Resume' 
                target='_blank'
                className='round-button'>Descargar CV</a>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Me

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        bio
      }
    }
    profilePhoto: file(relativePath: { eq: "images/me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `
