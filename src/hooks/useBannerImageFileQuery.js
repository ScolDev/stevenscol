import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const useBannerImageFileQuery = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "images/banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)
  return getImage(bannerImage)?.images?.fallback?.src
}

export default useBannerImageFileQuery
