import React from 'react'

import SocialMedia from '../../molecules/social-media/SocialMedia'
import ProfileWidget from '../../molecules/profile-widget/ProfileWidget'
import useHeroImageFileQuery from '../../../hooks/useHeroImageFileQuery'

import './Hero.sass'

function Hero () {
  const heroImage = useHeroImageFileQuery()
  const style = {
    backgroundImage: `url(${heroImage})`
  }

  return (
    <section
      className="Hero"
      style={style}
    >
      <div className="Hero__wrapper">
        <article className="Hero__content">
          <div className="Hero__banner">
            <ProfileWidget />
          </div>
          <div className="Hero__extra">
            <div className="Hero__social white-box">
              <SocialMedia />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero
