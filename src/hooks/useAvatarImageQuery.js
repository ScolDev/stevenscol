import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const useAvatarImageQuery = () => {
  const { avatarImage } = useStaticQuery(graphql`
    {
      avatarImage: file(relativePath: { eq: "images/me.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
    }
  `)
  return getImage(avatarImage)
}

export default useAvatarImageQuery
