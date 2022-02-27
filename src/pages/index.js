import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import Hero from '../components/hero/hero'
import Me from '../components/me/me'
import PostList from '../components/post-list/post-list'
import Container from '../components/container/container'
import defaultHero from '../assets/images/hero.jpg'

import './index.sass'

const IndexPage = ({ data, pageContext }) => {
  const { siteMetadata} = data.site
  const posts = data.posts.edges

  return (
    <>
      <Seo title='Inicio' />
      <Layout>
        <Hero
          forHome
          largeSize
          imageSrc={ defaultHero }
          { ...siteMetadata } />
        <Container>
          <main className="Home">
            <section className="Home-me Section">
              <article className="Home-me-content-">
                <Me widget />
              </article>
            </section>
            <section className="Home-posts Section">
              <h2>Últimos Posts</h2>
              <PostList
                pageContext={ pageContext }
                showPages={ false }
                posts={ posts } />
                <footer className="Home-posts-footer">
                  <Link to='/blog' className="round-button">Ver todos</Link>
                </footer>
            </section>
          </main>
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage

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
        author
        social
        blogPostPrefixPath
        blogPostsPaginatePrefixPath
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            status
            title
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 500, fit: INSIDE) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
  `
