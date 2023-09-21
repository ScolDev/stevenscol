import { graphql, useStaticQuery } from 'gatsby'

const useResumeFileQuery = () => {
  const { resumeFile } = useStaticQuery(graphql`
    {
      resumeFile: file(relativePath: { eq: "cv_robert_stevens_pineda_marin.pdf" }) {
        publicURL
      }
    }
  `)
  return resumeFile?.publicURL
}

export default useResumeFileQuery
