import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Seo from '../../components/seo/seo'
import Hero from '../../components/hero/hero'
import PostList from '../../components/post-list/post-list'
import Container from '../../components/container/container'
import defaultHero from '../../assets/images/hero.jpg'
import './index.sass'

const IndexPage = ({ data, pageContext }) => {
  const { siteMetadata } = data.site
  const posts = data.posts.edges

  return (
    <>
      <Seo title='Inicio' />
      <Layout>
        { 
          pageContext.pageNumber === 0 
            ? <Hero  imageSrc={ defaultHero } { ...siteMetadata } /> 
            : null 
        }
        <Container>
          <PostList 
            pageContext={ pageContext }
            posts={ posts } />
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author
        heroTitle
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
