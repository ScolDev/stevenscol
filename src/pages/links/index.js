import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Container from '../../components/container'
import Seo from '../../components/seo'
import Avatar from '../../components/avatar'
import Icon from '../../components/icon'

import './index.sass'
import PropTypes from 'prop-types'

const LinksPage = ({ data, pageContext }) => {
  const { siteMetadata } = data.site

  return (
    <>
      <Seo title='Links' />
      <Layout noHeader="true">
        <Container>
        <main className="Links">
          <section className="Links-content">
            <header className="Links-profile">
              <article className="Links-avatar">
                <Avatar></Avatar>
              </article>
              <p>{ siteMetadata.nickname }</p>
            </header>
            <section className="Links-content Section">
              {
                siteMetadata.social.map(({ name, url }) => {
                  return (
                  <Link className="Links-button white-box" to={ url } key={name}>
                    <Icon icon={ name } />
                    <span>
                      { name }
                    </span>
                  </Link>
                  )
                })
              }
            </section>
          </section>
        </main>
        </Container>
      </Layout>
    </>
  )
}

LinksPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default LinksPage

export const pageQuery = graphql`{
  profilePhoto: file(relativePath: {eq: "images/me.png"}) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  site {
    siteMetadata {
      title
      nickname
      author
      social {
        name
        url
      }
      blogPostPrefixPath
      blogPostsPaginatePrefixPath
    }
  }
}`
