import React from 'react'
import PropTypes from 'prop-types'

import './CardHeader.sass'

const CardHeader = ({ title, date }) => {
  return (
    <header className="CardHeader">
      <h3 className="CardHeader__title">{title}</h3>
      <span className="CardHeader__date">
        <em>{date}</em>
      </span>
    </header>
  )
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string
}

export default CardHeader
