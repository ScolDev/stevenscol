import React from 'react'
import SocialMedia from '../../molecules/social-media/SocialMedia'

import './Footer.sass'

const Footer = () => {
  return (
    <footer className="Footer section">
      <article className="Footer__info">
        <span>Desarrollado con amor con Gatsby</span>
      </article>
      <article className="Footer__socialMedia">
        <SocialMedia />
      </article>
    </footer>
  )
}

export default Footer
