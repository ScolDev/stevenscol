import React from 'react'
import PropTypes from 'prop-types'
import { getImage } from 'gatsby-plugin-image'

import './BaseImage.sass'

const BaseImage = (props) => {
  const { image, title, className } = props
  const imageSrc = typeof image === 'object' ? getImage(image) : image

  return typeof image === 'string'
    ? (
    <img
      src={imageSrc}
      alt={title}
      className={className}
      loading="lazy"
    />
      )
    : (
    <img
      src={imageSrc.images.fallback.src}
      alt={title}
      className={className}
      loading="lazy"
    />
      )
  // <GatsbyImage
  //   image={imageSrc}
  //   alt={title}
  //   style={{ height: '100%', width: '100%', backgroundColor: imageSrc.backgroundColor }}
  // />
}

BaseImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string,
  className: PropTypes.string
}

export default BaseImage
