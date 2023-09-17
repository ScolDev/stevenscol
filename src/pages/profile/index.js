import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Me from '../../components/me'
import Container from '../../components/container'
import PropTypes from 'prop-types'

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
                <Me />
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
