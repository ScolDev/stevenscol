import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import BaseImage from '../../atoms/base-image/BaseImage'
import useSiteMetadataQuery from '../../../hooks/useSiteMetadataQuery'
import useSkillsFilesQuery from '../../../hooks/useSkillsFilesQuery'

import './SkillsLogos.sass'

const SkillsLogos = () => {
  const { nickname } = useSiteMetadataQuery()
  const files = useSkillsFilesQuery()

  return files.map((file) => {
    const image = getImage(file) || ''
    return (
      <div
        className="SkillsLogos"
        key={file.id}
      >
        <article className="SkillsLogos__skill">
          <BaseImage
            title={nickname}
            image={image}
          />
        </article>
      </div>
    )
  })
}

export default SkillsLogos
