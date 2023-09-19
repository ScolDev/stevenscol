import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Seo from '../components/molecules/seo/Seo'
import Hero from '../components/organisms/hero/Hero'
import VideoList from '../components/video-list'
import BlogList from '../components/organisms/blog-list/BlogList'
import Container from '../components/container'

import './index.sass'
import BaseLink from '../components/molecules/base-link/BaseLink'

const IndexPage = ({ data, pageContext }) => {
  const { siteMetadata } = data.site
  const youtubeChannel = siteMetadata.youtubeChannel ?? ''
  const blogs = data.blogs.edges.map(({ node }) => {
    const { title, image, date, path } = node.frontmatter
    return {
      title,
      image,
      date,
      path
    }
  })
  const videos = data.videos.edges.map(({ node }) => {
    const { id, title, videoId, thumbnail } = node
    return {
      id,
      title,
      url: `https://youtube.com/watch?v=${videoId}`,
      image: thumbnail.url
    }
  })

  return (
    <>
      <Seo title="Inicio" />
      <Layout>
        <Hero />
        <Container>
          <main className="Home">
            <section className="Home-videos Section">
              <h2>Últimos Videos</h2>
              <VideoList videos={videos} />
              <footer className="Home-posts-footer">
                <BaseLink
                  to={youtubeChannel}
                  className="round-button"
                >
                  Ir al Canal
                </BaseLink>
              </footer>
            </section>
            <section className="Home-current Section">
              <h2>Proyecto Actual</h2>
              <p>👾👾👾</p>
              <article className="Home-current-info">
                <p>
                  <strong>CaNES:</strong> Es un emulador de la NES{' '}
                  <i>(Nintendo Entertainment System)</i> en Javascript y
                  utilizando la metodología de desarrollo TDD{' '}
                  <i>(Test Driven Development).</i>
                </p>
                <p>
                  El proyecto surge como una iniciativa para reunir algunas de
                  mis pasiones como la arquitectura de bajo nivel, la ingeniería
                  inversa, los juegos retro y javascript (por supuesto ❤️).
                </p>
                <p>
                  He decidido utilizar la metodología de desarrollo TDD por dos
                  razones principales, la primera es porqué me encuentro
                  aprendiendo y descubriendo los beneficios detrás de su
                  filosofía, y la segunda es porqué se ajusta perfectamente en
                  el desarrollo de una arquitectura como la de un emulador, sin
                  la necesidad de conocer de antemano el panorama general que
                  esto conlleva, concentrandonos en pequeñas piezas una por una
                  que irán siendo probadas durante el proceso{' '}
                  <i>(CPU, ALU, PPU, I/O, etc)</i>.
                </p>

                <div className="Home-current-project">
                  <BaseLink
                    to="https://github.com/StevensCol/canes"
                    className="round-button"
                  >
                    Ir a CaNES
                  </BaseLink>
                </div>
              </article>
            </section>
            <section className="Home-posts Section">
              <h2>Últimos Posts</h2>
              <BlogList
                pageContext={pageContext}
                blogs={blogs}
              />
              <footer className="Home-posts-footer">
                <Link
                  to="/blog"
                  className="round-button"
                >
                  Ver todos
                </Link>
              </footer>
            </section>
          </main>
        </Container>
      </Layout>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default IndexPage

export const pageQuery = graphql`
  query pageHomescolsrcgitstevenscolsrcpagesindexJs1856938877 {
    heroImage: file(relativePath: { eq: "images/hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    profilePhoto: file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 400
          transformOptions: { fit: INSIDE }
          layout: CONSTRAINED
        )
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
        blogPostPrefixPath
        blogPostsPaginatePrefixPath
      }
    }
    blogs: allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 3) {
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
                gatsbyImageData(
                  width: 500
                  transformOptions: { fit: INSIDE }
                  layout: CONSTRAINED
                )
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
          }
          publishedAt
        }
      }
    }
  }
`
