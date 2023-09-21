import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../components/atoms/icon/Icon'
import SingleLayout from '../../components/layouts/single-layout/SingleLayout'
import BaseLink from '../../components/molecules/base-link/BaseLink'
import Seo from '../../components/molecules/seo/Seo'
import Avatar from '../../components/atoms/avatar/Avatar'
import useSiteMetadataQuery from '../../hooks/useSiteMetadataQuery'

import './index.sass'

const LinksPage = ({ pageContext }) => {
  const { nickname, social } = useSiteMetadataQuery()

  return (
    <>
      <Seo title="Links" />
      <SingleLayout>
        <main className="Links">
          <section className="Links__content">
            <header className="Links__profile">
              <article className="Links__avatar">
                <Avatar />
              </article>
              <p>{nickname}</p>
            </header>
            <section className="Links__content">
              {social.map(({ name, url }) => {
                return (
                  <BaseLink
                    className="Links__button white-box"
                    to={url}
                    key={name}
                  >
                    <Icon icon={name} />
                    <span>{name}</span>
                  </BaseLink>
                )
              })}
            </section>
          </section>
        </main>
      </SingleLayout>
    </>
  )
}

LinksPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default LinksPage
