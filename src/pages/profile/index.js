import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/molecules/seo/Seo'
import Container from '../../components/container'
import PropTypes from 'prop-types'
import Profile from '../../components/molecules/profile/Profile'

import './index.sass'

const ProfilePage = ({ data, pageContext }) => {
  return (
    <>
      <Seo title='Perfil' />
      <Layout>
        <Container>
          <main className="Profile">
            <section className="Profile-me Section">
              <article className="Profile-me-content">
                <Profile />
              </article>
            </section>
          </main>
        </Container>
      </Layout>
    </>
  )
}

ProfilePage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default ProfilePage

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
      author
      social {
        name
        url
      }
      blogPostPrefixPath
      blogPostsPaginatePrefixPath
    }
  }
}`
