import { graphql } from 'gatsby'

export const blogPostFragment = graphql`
  fragment BlogPostFragment on MarkdownRemark {
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
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`
