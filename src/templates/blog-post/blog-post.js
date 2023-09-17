import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Prism from 'prismjs'

import Layout from '../../components/layout'
import Container from '../../components/container'
import Seo from '../../components/seo'
import Hero from '../../components/hero'
import '../../common/prism-monokai.css'
import { PropTypes } from 'prop-types'

import './blog-post.sass'

const BlogPost = ({ data, pageContext }) => {
  useEffect(() => { Prism.highlightAll() })

  const { contentPost, site } = data
  const { next, previous } = pageContext
  const image = contentPost.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src

  return <>
    <Seo
      article
      title={ contentPost.frontmatter.title }
      description={ contentPost.excerpt }
      image={ image } />

    <Layout>
      <Container>
        <section className='BlogPost justify-content-center'>
          <Hero
            image={ image }
            alignToBottomLeft />
          <div className="BlogPost-content">
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
                  contentPost.tags
                    ? contentPost.tags.map((tag, index) => (
                    <a href='#' key={index}>{tag.name}</a>
                    ))
                    : <i>No hay tags en este post.</i>
                }
              </div>
            </article>
            <div className='BlogPost-footer'>
              <div className="BlogPost-footer-previousPost">
                { previous.path ? (<div><Link to={ previous.path }>Anterior</Link></div>) : null }
              </div>
              <div className="BlogPost-footer-nextPost">
                { next.path ? (<div><Link to={ next.path }>Siguiente</Link></div>) : null }
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  </>
}

BlogPost.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default BlogPost

export const pageQuery = graphql`query BlogPost($path_: String!) {
  site {
    siteMetadata {
      title
      url
      author
      social {
        name
        url
      }
    }
  }
  contentPost: markdownRemark(frontmatter: {path: {eq: $path_}}) {
    id
    excerpt
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
}`
