import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon/icon'
import SocialMedia from '../social-media/social-media'

import './hero.sass'

function Hero (props) {
  const { 
    forHome,
    heroTitle, 
    social, 
    imageSrc, 
    image, 
    largeSize,
    mediumSize,
    alignToBottomLeft 
  } = props

  const heroClass = [
    'Hero',
    alignToBottomLeft ? 'Hero-bottom-left' : '',
    largeSize ? 'largeHero': mediumSize ? 'mediumHero' : ''
  ]

  const heroClassWrap = `Hero-wrap ${alignToBottomLeft ? 'Hero-bottom-left-wrap container' : ''}`
  
  const style = {
    backgroundImage: `url(${ imageSrc || image?.childImageSharp?.fluid?.src })`
  }

  return (
    <div className={ heroClass.join(' ') } style={style}>
      <div className={heroClassWrap}>
        <div className='Hero-content'>
          { forHome 
            ? (
              <div className="Hero-banner">
                <Icon icon='banner' />
              </div>
            ) : null
          }
          { heroTitle ? <h1>{heroTitle}</h1> : null }
          {
            forHome && social ? (
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
  forHome: PropTypes.bool,
  heroTitle: PropTypes.string,
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
