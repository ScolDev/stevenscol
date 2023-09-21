import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { getImage } from 'gatsby-plugin-image'
import useSiteMetadataQuery from '../../../hooks/useSiteMetadataQuery'
import useBannerImageFileQuery from '../../../hooks/useBannerImageFileQuery'

function Seo (props) {
  const bannerImage = useBannerImageFileQuery()
  const { title, keywords, description, image, lang, type, author, date } = props
  const siteMetadata = useSiteMetadataQuery()

  function resolveImage () {
    const host = siteMetadata.siteUrl

    if (typeof image === 'object') {
      return `${host}${getImage(image)?.images.fallback?.src}`
    }
    if (typeof bannerImage === 'string') {
      return `${host}${bannerImage}`
    }
    return ''
  }

  const pageDescription = description || siteMetadata.description
  const pageTitle = `${title} | ${siteMetadata.siteName}`
  const pageKeywords = keywords || siteMetadata.keywords
  const pageImage = resolveImage()

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      meta={[
        { httpEquiv: 'content-language', content: lang },
        { name: 'description', content: pageDescription },
        { property: 'og:type', content: type },
        { property: 'og:title', content: pageTitle },
        { property: 'og:description', content: pageDescription },
        { property: 'og:image', content: pageImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: pageImage },
        { name: 'twitter:creator', content: siteMetadata.twitterID },
        { name: 'twitter:site', content: siteMetadata.twitterID },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:description', content: pageDescription },
        { name: 'author', content: author },
        { name: 'date', content: date },
        {
          name: 'keywords',
          content: pageKeywords.join(', ')
        }
      ]}
    />
  )
}

Seo.defaultProps = {
  lang: 'es-CO',
  type: 'website',
  author: 'Stevens Pineda - @ScolDev',
  date: new Date().toDateString()
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.object,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  type: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string
}

export default Seo
