import React from 'react'
import PropTypes from 'prop-types'

import SocialMedia from '../social-media/social-media'
import './footer.sass'

const Footer = props => {
  const { social } = props
  return (
    <footer className='Footer Section'>
      <div className='Footer-info'>
        <span>Desarrollado con amor con Gatsby.js</span>
      </div>
      <div className='Footer-social-media'>
        <SocialMedia social={social} />
      </div>
    </footer>
  )
}

Footer.propTypes = {
  social: PropTypes.array.isRequired
}

export default Footer
