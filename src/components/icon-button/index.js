import React from 'react'
import { Link } from 'gatsby'
import Icon from '../icon'
import { PropTypes } from 'prop-types'

const IconButton = ({ to, icon, external }) => {
  return to
    ? (
        external
          ? (
      <a target="_blank" href={to} rel="noreferrer">
        <Icon icon={icon} />
      </a>
            )
          : (
      <Link to={to}>
        <Icon icon={icon} />
      </Link>
            )
      )
    : (
    <Icon icon={icon} />
      )
}

IconButton.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  external: PropTypes.string
}

export default IconButton
