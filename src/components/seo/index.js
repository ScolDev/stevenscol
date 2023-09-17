import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import siteBanner from '../../assets/images/banner.jpg'

function Seo (props) {
  const {
    title,
    description,
    image,
    lang,
    meta,
    keywords,
    article
  } = props

  const heroImage = image || siteBanner

  return (
    <StaticQuery
    query={detailsQuery}
    render={ data => {
      const { title: siteName, twitterID } = data.site.siteMetadata
      const siteDescription = description || data.site.siteMetadata.description

      const ogTitle = `${title} | ${siteName}`
      const ogImage = heroImage

      return (
          <Helmet
            htmlAttributes={{ lang }}
            title={ ogTitle }
            meta={[
              { name: 'description', content: siteDescription },
              { property: 'og:title', content: ogTitle },
              { property: 'og:description', content: siteDescription },
              { property: 'og:type', content: article ? 'article' : 'website' },
              { property: 'og:image', content: ogImage },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:image', content: ogImage },
              { name: 'twitter:creator', content: twitterID },
              { name: 'twitter:site', content: twitterID },
              { name: 'twitter:title', content: ogTitle },
              { name: 'twitter:description', content: siteDescription }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', ')
                    }
                  : []
              )
              .concat(meta)}
          />
      )
    }}
    />
  )
}

Seo.defaultProps = {
  lang: 'es',
  meta: [],
  keywords: [],
  article: false
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  article: PropTypes.bool
}

export default Seo

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        url
        twitterID
      }
    }
  }
`
