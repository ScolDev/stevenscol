import React from 'react'

import Avatar from '../../atoms/avatar/Avatar'
import useSiteMetadataQuery from '../../../hooks/useSiteMetadataQuery'
import useResumeFileQuery from '../../../hooks/useResumeFileQuery'
import SkillsLogos from '../skills-logos/SkillsLogos'

import './Profile.sass'

const Profile = () => {
  const { author, experience, bio, skills } = useSiteMetadataQuery()
  const resumeUrl = useResumeFileQuery()

  return (
    <section className="Profile">
      <div className="Profile__content">
        <div className="Profile__photo">
          <Avatar />
        </div>
        <div className="Profile__bio">
          <h1>{author}</h1>
          <p>{bio}</p>
        </div>
        <div className="Profile__resume">
          <a
            href={resumeUrl}
            target="_blank"
            className="round-button"
            rel="noreferrer"
          >
            Ver CV
          </a>
        </div>
        <div className="Profile__skills section">
          <h2>Skills</h2>
          <p>{skills}</p>
          <div className="Profile__topics">
            <SkillsLogos />
          </div>
          <p>...entre otras más.</p>
          <div className="Profile__skills section"></div>
          <h2>Experiencia</h2>
          <p>{experience}</p>
        </div>
      </div>
    </section>
  )
}

export default Profile
