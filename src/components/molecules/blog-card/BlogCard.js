import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from '../../atoms/card-header/CardHeader'
import CardImage from '../../atoms/card-image/CardImage'
import BaseLink from '../base-link/BaseLink'

import './BlogCard.sass'

function BlogCard ({ blog }) {
  const { title, image, date, path } = blog
  const url = `/blog${path}`

  return (
    <BaseLink to={url}>
      <article className="BlogCard">
        <div className="BlogCard__wrapper BlogCard__wrapper-highContrast">
          <div className="BlogCard__content">
            <CardHeader {...{ title, url, date }} />
            <CardImage {...{ image, url, title }} />
          </div>
        </div>
      </article>
    </BaseLink>
  )
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.object,
    date: PropTypes.string,
    path: PropTypes.string
  })
}

export default BlogCard
