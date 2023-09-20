import React from 'react'
import PropTypes from 'prop-types'
import VideoCard from '../../molecules/video-card/VideoCard'

import './VideoList.sass'

function VideoList ({ videos }) {
  return (
    <article className="VideoList">
      <section className="VideoList__content">
        <div className="VideoList__videos">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
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
