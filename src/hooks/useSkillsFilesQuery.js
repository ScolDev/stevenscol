import { graphql, useStaticQuery } from 'gatsby'

const useSkillsFilesQuery = () => {
  const { skillsFiles } = useStaticQuery(graphql`
    {
      skillsFiles: allFile(
        sort: { name: ASC }
        filter: {
          extension: { eq: "png" }
          relativeDirectory: { eq: "images/skills" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 100, quality: 60, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  return skillsFiles?.edges.map(({ node }) => ({ ...node }))
}

export default useSkillsFilesQuery
