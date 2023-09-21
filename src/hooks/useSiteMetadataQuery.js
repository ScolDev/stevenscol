import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadataQuery = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          bio
          nickname
          siteUrl
          skills
          title
          experience
          keywords
          social {
            name
            url
          }
        }
      }
    }
  `)

  return site?.siteMetadata
}

export default useSiteMetadataQuery
