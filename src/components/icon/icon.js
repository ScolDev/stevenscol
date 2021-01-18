import React from 'react'
import PropTypes from 'prop-types'
import { SVG } from '../../common/constants'

import './icon.sass'

const Icon = props => {
  const icon = SVG[props.icon] || ''

  return (
    <div
      className='Icon'
      dangerouslySetInnerHTML={{
        __html: icon
      }}
    />
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default Icon
