import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../atoms/icon/Icon'
import BaseLink from '../base-link/BaseLink'

const IconLink = (props) => {
  const { to, icon } = props

  return (
    <BaseLink
      to={to}
    >
      <Icon icon={icon} />
    </BaseLink>
  )
}

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default IconLink
