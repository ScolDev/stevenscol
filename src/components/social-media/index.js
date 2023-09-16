import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '../icon-button'

import { SVG } from '../../common/constants'
import './social-media.sass'

function SocialMedia (props) {
  const { social } = props
  return (
    <div className='SocialMedia'>
      <div className='SocialMedia-content'>
        {
          social.map(item => {
            const { name, url } = item

            return SVG[name]
              ? <IconButton
                key={name}
                external
                to={url}
                icon={name} />
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
