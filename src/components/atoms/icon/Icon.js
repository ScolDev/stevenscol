import React from 'react'
import PropTypes from 'prop-types'
import { IconFactory } from './IconFactory'

import './Icon.sass'

const Icon = (props) => {
  return (<div
    className="Icon"
    { ...props }>
    {IconFactory(props.icon)}
  </div>)
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default Icon
