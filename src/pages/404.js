import React from 'react'

import SingleLayout from '../components/layouts/SingleLayour'
import Avatar from '../components/atoms/avatar/Avatar'
import BaseLink from '../components/molecules/base-link/BaseLink'

import './404.sass'

const NotFoundPage = () => (
  <>
    <SingleLayout>
      <section className="NotFound section">
        <Avatar />
        <article className="NotFound__info">
          <h1>No se encontró el recurso</h1>
          <BaseLink
            to="/"
            className="round-button"
          >
            Volver al sitio.
          </BaseLink>
        </article>
      </section>
    </SingleLayout>
  </>
)

export default NotFoundPage
