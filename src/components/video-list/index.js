import React from 'react'
import PropTypes from 'prop-types'
import VideoCard from '../video-card'

import './video-list.sass'

function VideoList ({ videos, ytChannel }) {
  return (
    <article className='VideoList justify-content-center'>
      <section className='VideoList-content'>
        <div className='VideoList-items'>
          { videos.map(video => <VideoCard key={video.node.id} video={video.node } />) }
        </div>
      </section>
    </article>
  )
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  ytChannel: PropTypes.string.isRequired
}

export default VideoList
