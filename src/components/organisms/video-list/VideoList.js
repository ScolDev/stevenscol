import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../molecules/card/Card'

import './VideoList.sass'

const VideoList = ({ videos }) => {
  return (
    <article className="VideoList">
      <section className="VideoList__content">
        <div className="VideoList__videos">
          {videos.map((video) => (
            <Card
              key={video.id}
              item={video}
            />
          ))}
        </div>
      </section>
    </article>
  )
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
}

export default VideoList
