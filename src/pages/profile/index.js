import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Hero from '../../components/hero'
import Me from '../../components/me'
import PostList from '../../components/post-list'
import Container from '../../components/container'

import './index.sass'

const ProfilePage = ({ data, pageContext }) => {
  const { siteMetadata} = data.site

  return (
    <>
      <Seo title='Perfil' />
      <Layout>
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

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
      author
      social {
        name
        url
      }
      blogPostPrefixPath
      blogPostsPaginatePrefixPath
    }
  }
}`
