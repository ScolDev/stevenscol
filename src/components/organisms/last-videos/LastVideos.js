import React from 'react'
import BaseLink from '../../molecules/base-link/BaseLink'
import Card from '../../molecules/card/Card'
import useYoutubeVideosQuery from '../../../hooks/useYoutubeVideosQuery'
import useSiteMetadataQuery from '../../../hooks/useSiteMetadataQuery'

import './LastVideos.sass'

const LastVideos = () => {
  const { youtubeChannel } = useSiteMetadataQuery()
  const videos = useYoutubeVideosQuery()

  return (
    <article className="LastVideos">
      <section className="LastVideos__content">
        <div className="LastVideos__videos">
          {videos.map((video) => (
            <Card
              key={video.id}
              item={video}
            />
          ))}
        </div>
          <article className="LastVideos__cta cta">
            <BaseLink
              to={youtubeChannel}
              className="round-button"
            >
              Ir al Canal
            </BaseLink>
          </article>
      </section>
    </article>
  )
}

export default LastVideos
