import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from '../base-link/BaseLink'
import CardHeader from '../../atoms/card-header/CardHeader'
import CardImage from '../../atoms/card-image/CardImage'

import './VideoCard.sass'

function VideoCard ({ video }) {
  const { title, image, url } = video

  return (
    <article className="VideoCard">
      <BaseLink to={url}>
        <div className="HighContrast VideoCard__wrapper">
          <div className="VideoCard__content">
            <CardHeader {...{ title }} />
            <CardImage {...{ title, image }} />
          </div>
        </div>
      </BaseLink>
    </article>
  )
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string
  }).isRequired
}

export default VideoCard
