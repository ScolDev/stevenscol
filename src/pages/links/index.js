import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Container from '../../components/container'
import Seo from '../../components/molecules/seo/Seo'
import Avatar from '../../components/atoms/avatar/Avatar'
import Icon from '../../components/atoms/icon/Icon'

import './index.sass'
import PropTypes from 'prop-types'

const LinksPage = ({ data, pageContext }) => {
  const { siteMetadata } = data.site

  return (
    <>
      <Seo title='Links' />
      <Layout noHeader={ true }>
        <main className="Links">
          <section className="Links__content">
            <header className="Links__profile">
              <article className="Links__avatar">
                <Avatar />
              </article>
              <p>{ siteMetadata.nickname }</p>
            </header>
            <section className="Links__content">
              {
                siteMetadata.social.map(({ name, url }) => {
                  return (
                  <Link className="Links__button white-box" to={ url } key={name}>
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
