import { graphql, useStaticQuery } from 'gatsby'

const useYoutubeVideosQuery = () => {
  const youtubeBaseUrl = 'https://youtube.com/watch?v='
  const { videos } = useStaticQuery(graphql`
    {
      videos: allYoutubeVideo(limit: 4) {
        edges {
          node {
            id
            title
            description
            videoId
            thumbnail {
              url
            }
            publishedAt
          }
        }
      }
    }
  `)

  return videos.edges.map(({ node }) => {
    const { id, title, videoId, thumbnail, publishedAt } = node
    return {
      id,
      title,
      date: new Date(publishedAt).toDateString(),
      to: `${youtubeBaseUrl}${videoId}`,
      image: thumbnail.url
    }
  })
}

export default useYoutubeVideosQuery
