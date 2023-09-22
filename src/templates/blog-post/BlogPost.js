import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import Prism from 'prismjs'

import PageLayout from '../../components/layouts/page-layout/PageLayout'
import Container from '../../components/layouts/container/Container'
import Avatar from '../../components/atoms/avatar/Avatar'
import Seo from '../../components/molecules/seo/Seo'
import BaseImage from '../../components/atoms/base-image/BaseImage'
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery'

import '../../common/prism-monokai.css'
import './BlogPost.sass'

const BlogPost = ({ data, pageContext }) => {
  const { author } = useSiteMetadataQuery()
  useEffect(() => {
    Prism.highlightAll()
  })

  const { contentPost } = data
  const { next, previous } = pageContext
  const image = contentPost.frontmatter.image

  return (
    <>
      <Seo
        type="article"
        title={contentPost.frontmatter.title}
        description={contentPost.excerpt}
        image={image}
      />

      <PageLayout>
        <Container>
          <section className="BlogPost">
            <BaseImage
              className="BlogPost__headerImage"
              title={contentPost.frontmatter.title}
              image={image}
            />
            <div className="BlogPost__content">
              <section className="BlogPost__header">
                <h1>{contentPost.frontmatter.title}</h1>
                <div className="BlogPost__info">
                  <div className="BlogPost__avatar">
                    <Avatar />
                  </div>
                  <div className="BlogPost__publisher">
                    <em>Por: {author}</em>
                    <em>Fecha: {contentPost.frontmatter.date}</em>
                  </div>
                </div>
              </section>
              <article
                className="BlogPost__body"
                dangerouslySetInnerHTML={{ __html: contentPost.html }}
              />
              <article className="BlogPost__tags">
                <div>
                  <h3>Tags:</h3>
                </div>
                <div className="BlogPost__tagsContent">
                  {contentPost.tags
                    ? (
                        contentPost.tags.map((tag, index) => (
                      <a
                        href="#"
                        key={index}
                      >
                        {tag.name}
                      </a>
                        ))
                      )
                    : (
                    <i>No hay tags en este post.</i>
                      )}
                </div>
              </article>
              <div className="BlogPost__footer">
                <div className="BlogPost__previousPost">
                  {previous.path
                    ? (
                    <div>
                      <Link to={previous.path}>Anterior</Link>
                    </div>
                      )
                    : null}
                </div>
                <div className="BlogPost__nextPost">
                  {next.path
                    ? (
                    <div>
                      <Link to={next.path}>Siguiente</Link>
                    </div>
                      )
                    : null}
                </div>
              </div>
            </div>
          </section>
        </Container>
      </PageLayout>
    </>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPost($path_: String!) {
    contentPost: markdownRemark(frontmatter: { path: { eq: $path_ } }) {
      html
      ...BlogPostFragment
    }
  }
`
