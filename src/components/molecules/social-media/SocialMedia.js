import React from 'react'
import IconLink from '../../molecules/icon-link/IconLink'
import useSiteMetadataQuery from '../../../hooks/useSiteMetadataQuery'

import './SocialMedia.sass'

function SocialMedia () {
  const { social } = useSiteMetadataQuery()
  return (
    <div className="SocialMedia">
      <div className="SocialMedia__content">
        {social.map((item) => {
          const { name, url } = item

          return (
            <IconLink
              key={name}
              icon={name}
              to={url}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SocialMedia
