import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageLayout from '../../components/layouts/PageLayour'
import Container from '../../components/container'
import Seo from '../../components/molecules/seo/Seo'
import BlogList from '../../components/organisms/blog-list/BlogList'

import './blog.sass'

const Blog = ({ data, pageContext }) => {
  const { pageNumber } = pageContext
  const blogs = data.blogs.edges.map(({ node }) => {
    const { title, image, date, path } = node.frontmatter
    return {
      title,
      image,
      date,
      path,
      id: node.id
    }
  })

  return (
    <>
      <Seo title="Blog" />
      <PageLayout>
        <Container>
          <main className="Blog">
            <section className="Blog-posts Section">
              <header className="PostList-title">
                <h1>Página {pageNumber + 1}</h1>
              </header>
              <BlogList
                pageContext={pageContext}
                blogs={blogs}
              />
            </section>
          </main>
        </Container>
      </PageLayout>
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
    blogs: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
                  transformOptions: { fit: INSIDE }
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
