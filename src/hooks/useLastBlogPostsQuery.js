import { graphql, useStaticQuery } from 'gatsby'

const useLastBlogPostsQuery = () => {
  const { blogs } = useStaticQuery(graphql`
    {
      blogs: allMarkdownRemark(
        limit: 4
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            ...BlogPostFragment
          }
        }
      }
    }
  `)

  return getBlogs(blogs)
}

export const getBlogs = (blogs) => {
  const blogsPath = '/blog'
  return blogs.edges.map(({ node }) => {
    const { title, image, date, path } = node.frontmatter
    return {
      title,
      image,
      date,
      to: `${blogsPath}${path}`,
      id: node.id
    }
  })
}

export default useLastBlogPostsQuery
