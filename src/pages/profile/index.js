import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from '../../components/layouts/page-layout/PageLayout'
import Container from '../../components/layouts/container/Container'
import Seo from '../../components/molecules/seo/Seo'
import Profile from '../../components/molecules/profile/Profile'

import './index.sass'

const ProfilePage = () => {
  return (
    <>
      <Seo title='Perfil' />
      <PageLayout>
        <Container>
          <main className="Profile">
            <section className="Profile-me section">
              <article className="Profile-me-content">
                <Profile />
              </article>
            </section>
          </main>
        </Container>
      </PageLayout>
    </>
  )
}

ProfilePage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default ProfilePage
