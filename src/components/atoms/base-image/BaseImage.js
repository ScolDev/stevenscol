import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BaseImage = (props) => {
  const { image, title } = props
  const imageSrc = typeof image === 'object'
    ? getImage(image)
    : image

  return typeof image === 'string'
    ? (
    <img
      src={imageSrc}
      alt="statica"
      loading="lazy"
      style={{ height: '100%', width: '100%', backgroundColor: imageSrc.backgroundColor }}
    />
      )
    : (
    <GatsbyImage
      image={imageSrc}
      alt={title}
      style={{ height: '100%', width: '100%', backgroundColor: imageSrc.backgroundColor }}
    />
      )
}

BaseImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  title: PropTypes.string
}

export default BaseImage
