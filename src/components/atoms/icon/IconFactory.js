import * as FaIcons from 'react-icons/fa'
import React from 'react'
import { CustomIcons } from './CustomIcons'

const icons = {
  github: FaIcons.FaGithub,
  youtube: FaIcons.FaYoutube,
  tiktok: FaIcons.FaTiktok,
  instagram: FaIcons.FaInstagram,
  twitter: FaIcons.FaTwitter,
  twitch: FaIcons.FaTwitch,
  linkedin: FaIcons.FaLinkedin,
  play: FaIcons.FaPlay,
  email: FaIcons.FaEnvelope,
  sun: FaIcons.FaSun,
  moon: FaIcons.FaMoon
}

export const IconFactory = (name) => {
  if (icons[name]) {
    return React.createElement(icons[name])
  }

  if (CustomIcons[name]) {
    return (
      <div dangerouslySetInnerHTML={{
        __html: CustomIcons[name]
      }}
      />
    )
  }
}
