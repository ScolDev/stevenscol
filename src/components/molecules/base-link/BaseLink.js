import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const BaseLInk = ({ to, children, className }) => {
  const internal = /^\/(?!\/)/.test(to)

  return internal
    ? (
    <Link
      to={to}
      className={className}
    >
      {children}
    </Link>
      )
    : (
    <a
      target="_blank"
      href={to}
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
      )
}

BaseLInk.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
}

export default BaseLInk
