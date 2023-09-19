import React from 'react'
import PropTypes from 'prop-types'

import './social-media.sass'
import IconLink from '../molecules/icon-link/IconLink'

function SocialMedia (props) {
  const { social } = props
  return (
    <div className='SocialMedia'>
      <div className='SocialMedia__content'>
        {
          social.map(item => {
            const { name, url } = item

            return (
              <IconLink
                key={name}
                icon={name}
                to={url}
              />
            )
          })
        }
      </div>
    </div>
  )
}

SocialMedia.propTypes = {
  social: PropTypes.array.isRequired
}

export default SocialMedia
