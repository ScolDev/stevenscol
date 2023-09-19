import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import BaseLink from '../base-link/BaseLink'
import Avatar from '../../atoms/avatar/Avatar'

import './ProfileWidget.sass'

const ProfileWidget = () => {
  return (
    <StaticQuery
      query={query}
      render={({ site, skills }) => {
        return (
          <section className="ProfileWidget">
            <div className="ProfileWidget__content">
              <div className="ProfileWidget__photo">
                <Avatar />
              </div>
              <div className="ProfileWidget__bio">
                <h2>{site.siteMetadata.nickname}</h2>
                <div className="ProfileWidget__profile white-box">
                  <p>{site.siteMetadata.bio}</p>
                  <BaseLink to="/profile">Ver perfil</BaseLink>
                </div>
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default ProfileWidget

export const query = graphql`
  {
    site {
      siteMetadata {
        nickname
        bio
      }
    }
  }
`
