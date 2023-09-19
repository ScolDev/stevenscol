import React from 'react'
import PropTypes from 'prop-types'
import VideoCard from '../molecules/video-card/VideoCard'

import './video-list.sass'

function VideoList ({ videos }) {
  return (
    <article className="VideoList justify-content-center">
      <section className="VideoList-content">
        <div className="VideoList-items">
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
