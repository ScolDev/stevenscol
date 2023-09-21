import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const useHeroImageFileQuery = () => {
  const { heroImage } = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "images/hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)
  return getImage(heroImage)?.images?.fallback?.src
}

export default useHeroImageFileQuery
