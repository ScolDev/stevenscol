import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import PostList from '../../components/post-list'
import Container from '../../components/container'
import './blog.sass'
import PropTypes from 'prop-types'

const Blog = ({ data, pageContext }) => {
  const { pageNumber } = pageContext
  const posts = data.posts.edges

  return (
    <>
      <Seo title='Blog' />
      <Layout>
        <Container>
          <main className="Blog">
            <section className="Blog-posts Section">
              <header className='PostList-title'>
                <h1>Página { pageNumber + 1 }</h1>
              </header>
              <PostList
                pageContext={ pageContext }
                posts={ posts } />
            </section>
          </main>
        </Container>
      </Layout>
    </>
  )
}

Blog.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default Blog

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author
        blogPostPrefixPath
        blogPostsPaginatePrefixPath
        social {
          name
          url
        }
      }
    }
    posts: allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            status
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 500
                  transformOptions: {fit: INSIDE}
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
