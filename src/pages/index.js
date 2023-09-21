import React from 'react'
import PropTypes from 'prop-types'

import PageLayout from '../components/layouts/page-layout/PageLayout'
import Container from '../components/layouts/container/Container'
import BaseLink from '../components/molecules/base-link/BaseLink'
import Seo from '../components/molecules/seo/Seo'
import Hero from '../components/organisms/hero/Hero'
import LastVideos from '../components/organisms/last-videos/LastVideos'
import LastBlogPosts from '../components/organisms/last-blog-posts/LastBlogPosts'

import './index.sass'

const IndexPage = ({ data, pageContext }) => {
  return (
    <>
      <Seo title="Inicio" />
      <PageLayout>
        <Hero />
        <Container>
          <main className="Home">
            <section className="Home-videos section">
              <h2>Últimos Videos</h2>
              <LastVideos />
            </section>
            <section className="Home-current section">
              <h2>Proyecto Actual</h2>
              <p>👾👾👾</p>
              <article className="Home-current-info">
                <p>
                  <strong>CaNES:</strong> Es un emulador de la NES{' '}
                  <i>(Nintendo Entertainment System)</i> en Javascript y
                  utilizando la metodología de desarrollo TDD{' '}
                  <i>(Test Driven Development).</i>
                </p>
                <p>
                  El proyecto surge como una iniciativa para reunir algunas de
                  mis pasiones como la arquitectura de bajo nivel, la ingeniería
                  inversa, los juegos retro y javascript (por supuesto ❤️).
                </p>
                <p>
                  He decidido utilizar la metodología de desarrollo TDD por dos
                  razones principales, la primera es porqué me encuentro
                  aprendiendo y descubriendo los beneficios detrás de su
                  filosofía, y la segunda es porqué se ajusta perfectamente en
                  el desarrollo de una arquitectura como la de un emulador, sin
                  la necesidad de conocer de antemano el panorama general que
                  esto conlleva, concentrandonos en pequeñas piezas una por una
                  que irán siendo probadas durante el proceso{' '}
                  <i>(CPU, ALU, PPU, I/O, etc)</i>.
                </p>

                <div className="Home-current-project cta">
                  <BaseLink
                    to="https://github.com/StevensCol/canes"
                    className="round-button"
                  >
                    Ir a CaNES
                  </BaseLink>
                </div>
              </article>
            </section>
            <section className="Home-posts section">
              <h2>Últimos Posts</h2>
              <LastBlogPosts />
            </section>
          </main>
        </Container>
      </PageLayout>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default IndexPage
