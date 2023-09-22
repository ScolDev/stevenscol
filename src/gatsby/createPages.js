const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const prefixBlogPostUrl = '/blog'
  const BlogTemplate = path.resolve('src/templates/blog/Blog.js')
  const BlogPostTemplate = path.resolve('src/templates/blog-post/BlogPost.js')

  const result = await getAllPosts(graphql)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }
  const posts = result.data.allMarkdownRemark.edges

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 8,
    pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? prefixBlogPostUrl : `${prefixBlogPostUrl}/page`,
    component: BlogTemplate
  })

  posts.forEach((post, index) => {
    const { next, previous, node } = post

    // Create all individuals post pages
    const config = {
      path: path.join(prefixBlogPostUrl, node.frontmatter.path),
      component: BlogPostTemplate,
      context: {
        id: node.id,
        path_: node.frontmatter.path,
        previous: { path: next ? path.join(prefixBlogPostUrl, next.frontmatter.path) : null },
        next: { path: previous ? path.join(prefixBlogPostUrl, previous.frontmatter.path) : null }
      }
    }
    createPage(config)
  })
}

async function getAllPosts (graphql) {
  return graphql(`
    {
      allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
          next {
            frontmatter {
              path
            }
          }
          previous {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
}
