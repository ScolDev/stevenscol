import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

function Seo (props) {
  const {
    title,
    description,
    image,
    lang,
    keywords,
    type,
    author,
    date
  } = props

  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site, bannerImage }) => {
        function resolveImage () {
          if (typeof image === 'object') {
            return getImage(image)?.images.fallback?.src
          }
          if (typeof bannerImage === 'object') {
            return getImage(bannerImage)?.images.fallback?.src
          }
          return ''
        }

        const siteKeywords = keywords || site.siteMetadata.keywords
        const { title: siteName, twitterID } = site.siteMetadata

        const pageDescription = description || site.siteMetadata.description
        const pageTitle = `${title} | ${siteName}`

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
              { name: 'twitter:creator', content: twitterID },
              { name: 'twitter:site', content: twitterID },
              { name: 'twitter:title', content: pageTitle },
              { name: 'twitter:description', content: pageDescription },
              { name: 'author', content: author },
              { name: 'date', content: date },
              {
                name: 'keywords',
                content: siteKeywords.join(', ')
              }
            ]}
          />
        )
      }}
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

const detailsQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        author
        url
        twitterID
        keywords
      }
    }
    bannerImage: file(relativePath: { eq: "images/banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
