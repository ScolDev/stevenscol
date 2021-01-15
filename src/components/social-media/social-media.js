import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '../icon-button/icon-button'

import { ICONS } from '../../common/constants'
import './social-media.sass'

function SocialMedia (props) {
  const { social } = props
  return (
    <div className='SocialMedia'>
      <div className='SocialMedia-content'>
        {
          social.map(item => {
            const [name, url] = item.split('#')

            return ICONS[name]
              ? <IconButton
                key={name}
                to={url}
                icon={name}
                />
              : null
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
