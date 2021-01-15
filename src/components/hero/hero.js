import React from 'react'
import PropTypes from 'prop-types'
import SocialMedia from '../social-media/social-media'

import './hero.sass'

function Hero ({ heroTitle, social, imageSrc, image, alignToBottomLeft }) {
  const heroClass = `Hero ${alignToBottomLeft ? 'Hero-bottom-left' : ''}`
  const heroClassWrap = `Hero-wrap ${alignToBottomLeft ? 'Hero-bottom-left-wrap container' : ''}`
  
  const style = {
    backgroundImage: `url(${ imageSrc || image?.childImageSharp?.fluid?.src })`
  }

  return (
    <div className={heroClass} style={style}>
      <div className={heroClassWrap}>
        <div className='Hero-content'>
          <h1>{heroTitle}</h1>
          {
            social ? (
              <div className='Hero-extra'>
                <div className='Hero-extra-content'>
                  <SocialMedia social={social} />
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  social: PropTypes.array,
  alignToBottomLeft: PropTypes.bool
}

Hero.defaultProps = {
  alignToBottomLeft: false
}

export default Hero
