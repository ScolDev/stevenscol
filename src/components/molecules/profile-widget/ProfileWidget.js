import React from 'react'

import BaseLink from '../base-link/BaseLink'
import Avatar from '../../atoms/avatar/Avatar'
import useSiteMetadataQuery from '../../../hooks/useSiteMetadataQuery'

import './ProfileWidget.sass'

const ProfileWidget = () => {
  const { nickname, bio } = useSiteMetadataQuery()

  return (
    <section className="ProfileWidget">
      <div className="ProfileWidget__content">
        <div className="ProfileWidget__photo">
          <Avatar />
        </div>
        <div className="ProfileWidget__bio">
          <h2>{nickname}</h2>
          <div className="ProfileWidget__profile white-box">
            <p>{bio}</p>
            <BaseLink to="/profile">Ver perfil</BaseLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileWidget
