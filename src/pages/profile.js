import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'
import Me from '../components/me'
import PostList from '../components/post-list'
import Container from '../components/container'

import './profile.sass'

const ProfilePage = ({ data, pageContext }) => {
  const { siteMetadata} = data.site

  return (
    <>
      <Seo title='Perfil' />
      <Layout>
        {/* <Hero mediumSize imageSrc={ profileCover } /> */}
        <Container>
          <main className="Profile">
            <section className="Profile-me Section">
              <article className="Profile-me-content">
                <Me />
              </article>
            </section>
          </main>
        </Container>
      </Layout>
    </>
  )
}

export default ProfilePage

export const pageQuery = graphql`
  query {
    profilePhoto: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, fit: INSIDE) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        social
        blogPostPrefixPath
        blogPostsPaginatePrefixPath
      }
    }
  }
  `
