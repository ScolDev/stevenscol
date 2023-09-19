import React from 'react'
import PropTypes from 'prop-types'

import './CardImage.sass'
import BaseImage from '../base-image/BaseImage'

const CardImage = ({ image, title }) => {
  return (
    <article className="CardImage">
      <BaseImage {...{ title, image }} />
    </article>
  )
}

CardImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  title: PropTypes.string
}

export default CardImage
