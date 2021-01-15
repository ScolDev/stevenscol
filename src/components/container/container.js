import React from 'react'
import PropTypes from 'prop-types'

function Container (props) {
  const { children } = props
  return (
    <div className='Container'>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Container
