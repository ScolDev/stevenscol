import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Seo from '../../components/seo/seo'
import PostList from '../../components/post-list/post-list'
import Container from '../../components/container/container'
import './blog.sass'

const Blog = ({ data, pageContext }) => {
  const { siteMetadata } = data.site
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

export default Blog

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author
        social
        blogPostPrefixPath
        blogPostsPaginatePrefixPath
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
          }
        }
      }
    }
  }
  `
