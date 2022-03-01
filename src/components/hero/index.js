import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import SocialMedia from '../social-media'
import Me from '../me'

import './hero.sass'

function Hero (props) {
  const {
    forHome,
    title,
    social,
    imageSrc,
    image,
    largeSize,
    mediumSize,
    alignToBottomLeft
  } = props

  const heroClass = [
    'Hero',
    alignToBottomLeft ? 'bottomLeft' : '',
    largeSize ? 'largeHero': 'mediumHero'
  ].join(' ')

  const style = {
    backgroundImage: `url(${ imageSrc || image?.childImageSharp?.fluid?.src })`
  }

  return (
    <div className={ heroClass } style={style}>
      <div className='Hero-wrap'>
        <div className='Hero-content'>
          { forHome
            ? (
              <div className="Hero-banner">
                <Me widget />
              </div>
            ) : null
          }
          { title ? <h1>{title}</h1> : null }
          {
            forHome && social ? (
              <div className='Hero-extra'>
                <div className='Hero-extra-content white-box'>
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
  forHome: PropTypes.bool,
  title: PropTypes.string,
  social: PropTypes.array,
  alignToBottomLeft: PropTypes.bool,
  largeSize: PropTypes.bool,
  mediumSize: PropTypes.bool,
}

Hero.defaultProps = {
  forHome: false,
  alignToBottomLeft: false,
  largeSize: false,
  mediumSize: false,
}

export default Hero
