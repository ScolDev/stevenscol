import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageLayout from '../../components/layouts/page-layout/PageLayout'
import Container from '../../components/layouts/container/Container'
import Seo from '../../components/molecules/seo/Seo'
import BlogList from '../../components/organisms/blog-list/BlogList'
import { getBlogs } from '../../hooks/useLastBlogPostsQuery'

import './blog.sass'

const Blog = ({ data, pageContext }) => {
  const { pageNumber, numberOfPages } = pageContext
  const blogs = getBlogs(data.blogs)

  return (
    <>
      <Seo title="Blog" />
      <PageLayout>
        <Container>
          <main className="Blog">
            <section className="Blog-posts section">
              <header className="PostList-title">
                <h1>Página {pageNumber + 1}</h1>
              </header>
              <BlogList
                pageNumber={pageNumber}
                numOfPages={numberOfPages}
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
    blogs: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...BlogPostFragment
        }
      }
    }
  }
`
