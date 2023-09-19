import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Avatar from '../../atoms/avatar/Avatar'
import BaseImage from '../../atoms/base-image/BaseImage'

import './Profile.sass'

const Profile = () => {
  return (
    <StaticQuery
      query={query}
      render={({ site, resume, skills }) => {
        const cvUrl = resume.publicURL
        return (
          <section className="Profile">
            <div className="Profile__content">
              <div className="Profile__photo">
                <Avatar />
              </div>
              <div className="Profile__bio">
                <h1>{site.siteMetadata.author}</h1>
                <p>{site.siteMetadata.bio}</p>
              </div>
              <div className="Profile__resume">
                <a
                  href={cvUrl}
                  target="_blank"
                  className="round-button"
                  rel="noreferrer"
                >
                  Descargar CV
                </a>
              </div>
              <div className="Profile__skills Section">
                <h2>Skills</h2>
                <p>{site.siteMetadata.skills}</p>
                <div className="Profile__topics">
                  {skills.edges.map(({ node }) => {
                    const image = getImage(node) || ''
                    return (
                      <div
                        className="Profile__technology"
                        key={node.id}
                      >
                        <article className="Profile__techImg">
                          <BaseImage
                            title={site.siteMetadata.nickname}
                            image={image}
                          />
                        </article>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="Profile__skills Section">
                <h2>Experiencia</h2>
                <p>{site.siteMetadata.experience}</p>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Profile

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        nickname
        bio
        skills
        experience
      }
    }
    resume: file(relativePath: { eq: "cv_robert_stevens_pineda_marin.pdf" }) {
      publicURL
    }
    skills: allFile(
      filter: {
        extension: { eq: "png" }
        relativeDirectory: { eq: "images/skills" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 100, quality: 60, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
