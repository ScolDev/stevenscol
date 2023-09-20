import React from 'react'
import PropTypes from 'prop-types'
import BaseLink from '../base-link/BaseLink'

import './Paginator.sass'

const blogPagePrefix = '/blog/page/'

function Paginator (props) {
  const { currentPage, numOfPages, cssButtonClass, cssActiveButtonClass } =
    props

  if (numOfPages === 1) return null

  const { start, end } = getInterval(props)
  const buttons = []

  for (let page = start; page <= end; page++) {
    const buttonProps = buildButtonProps({
      page: page + 1,
      currentPage,
      cssButtonClass,
      cssActiveButtonClass
    })

    const buttonData = {
      props: buttonProps,
      key: page,
      text: page + 1
    }

    buttons.push(buildButton(buttonData))
  }

  if (numOfPages > 1) {
    const firstPage = buildButtonProps({
      page: 1,
      cssButtonClass,
      cssActiveButtonClass
    })
    const lastPage = buildButtonProps({
      page: numOfPages,
      cssButtonClass,
      cssActiveButtonClass
    })

    buttons.unshift(
      buildButton({
        props: firstPage,
        key: 'first',
        text: '<<'
      })
    )
    buttons.push(
      buildButton({
        props: lastPage,
        key: 'last',
        text: '>>'
      })
    )
  }

  return <div className="Paginator">{buttons}</div>
}

function buildButton ({ props, key, text }) {
  return (
    <div key={key}>
      <BaseLink {...props}>{text}</BaseLink>
    </div>
  )
}

function buildButtonProps ({
  page,
  currentPage = 0,
  cssButtonClass,
  cssActiveButtonClass
}) {
  const activeClass =
    currentPage > 0 && page === currentPage
      ? ['Paginator__active', cssActiveButtonClass]
      : []

  return {
    to: page > 1 ? `${blogPagePrefix + page}` : '/',
    className: ['Paginator__button', cssButtonClass, ...activeClass].join(' ')
  }
}

function getInterval ({ currentPage, numOfPages, pagesToShow }) {
  const humancurrentPage = currentPage + 1
  const numOfButtons = numOfPages < pagesToShow ? numOfPages : pagesToShow

  const delta = Math.floor(numOfButtons / 2)
  const deltaRight = delta
  const deltaLeft = numOfButtons % 2 !== 0 ? delta : delta - 1

  const overRight =
    humancurrentPage + deltaRight > numOfPages
      ? Math.abs(humancurrentPage + deltaRight - numOfPages)
      : 0
  const overLeft =
    humancurrentPage - deltaLeft <= 0
      ? Math.abs(humancurrentPage - deltaLeft - 1)
      : 0

  return {
    start: currentPage + overLeft - deltaLeft - overRight,
    end: currentPage + overLeft + deltaRight - overRight
  }
}

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numOfPages: PropTypes.number.isRequired,
  pagesToShow: PropTypes.number,
  cssButtonClass: PropTypes.string,
  cssActiveButtonClass: PropTypes.string
}

Paginator.defaultProps = {
  pagesToShow: 5
}

export default Paginator
