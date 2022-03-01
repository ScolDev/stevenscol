import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero'
import Me from '../components/me'

import VideoList from '../components/video-list';
import PostList from '../components/post-list'
import Container from '../components/container'
import defaultHero from '../assets/images/hero.jpg'

import './index.sass'

const IndexPage = ({ data, pageContext }) => {
  const { siteMetadata } = data.site
  const posts = data.posts.edges
  const videos = data.videos.edges

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
            <section className="Home-videos Section">
              <h2>Últimos Videos</h2>
              <VideoList
                videos={ videos }
                ytChannel={ siteMetadata.youtubeChannel } />
              <footer className="Home-posts-footer">
                <Link to={ siteMetadata.youtubeChannel } className="round-button">Ir al Canal</Link>
              </footer>
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
        youtubeChannel
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
    videos: allYoutubeVideo {
      edges {
        node {
          id
          title
          description
          videoId
          thumbnail {
            url
            width
            height
          }
          publishedAt
        }
      }
    }
  }
  `
