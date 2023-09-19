import React from 'react'

import Container from '../components/container'
import Avatar from '../components/atoms/avatar/Avatar'
import Layout from '../components/layout'
import BaseLink from '../components/molecules/base-link/BaseLink'

import './404.sass'

const NotFoundPage = () => {
  return (
    <>
      <Layout noHeader={true}>
          <section className="NotFound Section">
            <Avatar />
            <article className="NotFound__info">
            <h1>No se encontró el recurso</h1>
            <BaseLink to="/" className="round-button">Volver al sitio.</BaseLink>
            </article>
          </section>
      </Layout>
    </>
  )
}

export default NotFoundPage
