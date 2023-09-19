import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../atoms/icon/Icon'

const IconButton = (props) => {
  const { icon, onClick } = props
  const handlerClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  return (
    <a
      href="#"
      onClick={handlerClick}
    >
      <Icon icon={icon} />
    </a>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default IconButton
