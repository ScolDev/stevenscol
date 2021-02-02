import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import bannerImage from '../../assets/images/banner.jpg'

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

  // const bannerUrl = image || bannerImage
  const bannerUrl = bannerImage
  
  return (
    <StaticQuery
    query={detailsQuery}
    render={ data => {
        const metaDescription = description || data.site.siteMetadata.description
        const ogImage = data.site.siteMetadata.url + bannerImage
        
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              { name: 'description', content: metaDescription },
              { property: 'og:title', content: title },
              { property: 'og:description', content: metaDescription },
              { property: 'og:type', content: article ? 'article' : 'website' },
              { property: 'og:image', content: ogImage },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:image', content: ogImage },
              { name: 'twitter:creator', content: '@StevensPineda' },
              { name: 'twitter:site', content: '@StevensPineda' },
              { name: 'twitter:title', content: title },
              { name: 'twitter:description', content: metaDescription }
            ]
              .concat(
                keywords.length > 0 ? {
                  name: 'keywords',
                  content: keywords.join(', ')
                } : []
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
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
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
      }
    }
  }
`
