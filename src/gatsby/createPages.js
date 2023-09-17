const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const prefixBlogPostUrl = '/blog'
  const blogTemplate = path.resolve('src/templates/blog/blog.js')
  const postTemplate = path.resolve('src/templates/blog-post/blog-post.js')

  const result = await getAllPosts(graphql)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }
  const posts = result.data.allMarkdownRemark.edges

  // Create all blog pages with paginator
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 8,
    pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? prefixBlogPostUrl : `${prefixBlogPostUrl}/page`,
    component: blogTemplate
  })

  posts.forEach((post, index) => {
    const { next, previous, node } = post

    // Create all individuals post pages
    const config = {
      path: path.join(prefixBlogPostUrl, node.frontmatter.path),
      component: postTemplate,
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
