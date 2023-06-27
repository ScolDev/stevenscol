import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

import './video-card.sass'

function VideoCard ({ video }) {
  const { title, thumbnail, videoId } = video

  const videoUrl = `https://youtube.com/watch?v=${videoId}`
  return (
    <article className='VideoCard'>
      <Link to={videoUrl} target="_blank">
        <div className='HighContrast VideoCard-wrap'>
          <div className='VideoCard-content'>
            <div className='VideoCard-info'>
              <h3 className='VideoCard-title'>{title}</h3>
            </div>
            <div className='VideoCard-image'>
              {
                thumbnail ? (
                  <img
                  style={{ height: "100%", width: "100%" }}
                    src={ thumbnail.url }
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={ title } />
                ) : <span>{title ? title.charAt(0) : '' }</span>
              }
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

VideoCard.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoCard
