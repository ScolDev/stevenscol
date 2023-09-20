import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from '../../atoms/card-header/CardHeader'
import CardImage from '../../atoms/card-image/CardImage'
import BaseLink from '../base-link/BaseLink'

import './Card.sass'

const Card = ({ item }) => {
  const { title, image, date, to } = item
  return (
    <article className="Card">
      <BaseLink to={to}>
        <div className="Card__wrapper">
          <div className="Card__content">
            <CardHeader {...{ title, date }} />
            <CardImage {...{ image, title }} />
          </div>
        </div>
      </BaseLink>
    </article>
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    to: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  })
}

export default Card
