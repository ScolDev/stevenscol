import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Prism from 'prismjs'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

import Layout from '../../components/layout/layout'
import Container from '../../components/container/container'
import Seo from '../../components/seo/seo'
import Hero from '../../components/hero/hero'
import '../../common/prism-monokai.css'

import './blog-post.sass'

const BlogPost = ({ data, pageContext }) => {
  const { contentPost, site } = data
  const { next, previous } = pageContext

  const disqusConfig = {
    url: `${site.siteMetadata.url}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
    identifier: `${contentPost.id}`,
    title: contentPost.frontmatter.title
  }

  useEffect(() => { Prism.highlightAll() })

  return (
    <>
      <Seo title={contentPost.frontmatter.title} keywords={[]} />
      <Layout>
        <Hero 
          image={contentPost.frontmatter.image} 
          alignToBottomLeft />
        <Container>
          <section className='BlogPost row justify-content-center'>
            <div className="BlogPost-content col-lg-12">
              <section className='BlogPost-postinfo'>
                <h1>{ contentPost.frontmatter.title }</h1>
                <div><em>Por: { site.siteMetadata.author }</em></div>
                <div><em>Fecha: { contentPost.frontmatter.date }</em></div>
              </section>
              <article 
                className="BlogPost-content-html"
                dangerouslySetInnerHTML={{ __html: contentPost.html }} />
              <article className='BlogPost-tags col-lg-12'>
                <div>
                  <h3>Tags:</h3>
                </div>
                <div className='BlogPost-tags-content'>
                  {
                    contentPost.tags ? contentPost.tags.map(tag => (
                      <a href='#'>{tag.name}</a>
                    ))
                      : <i>No hay tags en este post.</i>
                  }
                </div>
              </article>
            </div>
            <div className='BlogPost-footer'>
              <div className="BlogPost-footer-previousPost">
                { previous.path ? ( <div><Link to={ previous.path }>Anterior</Link></div> ) : null }
              </div>
              <div className="BlogPost-footer-nextPost">
                { next.path ? ( <div><Link to={ next.path }>Siguiente</Link></div> ) : null }
              </div>
            </div>
            <section className='BlogPost-comments'>
              <Disqus config={disqusConfig} />
            </section>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPost ($path_: String!) {
    site {
      siteMetadata {
        title
        url
        author
        heroTitle
        social
      }
    }
    contentPost: markdownRemark( frontmatter: { path: { eq: $path_ } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1024) {
              src
              srcSet
              srcWebp
            }
          }
        }
      }
    }
  }
`
