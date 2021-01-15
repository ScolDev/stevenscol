import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './paginator.sass'
import { max } from 'moment'

const blogPagePrefix = '/blog/page/'

function Paginator (props) {
  const { pageNumber, numberOfPages } = props
  const interval = getInterval(props)
  const buttons = []

  if (numberOfPages === 1) return ''

  for (let pageIndex = interval.start; pageIndex <= interval.end; pageIndex++) {
    const buttonInfo = getButtonInfo(pageIndex + 1)
    const activeClass = pageNumber === pageIndex ? 'Paginator-button-active' : ''

    const buttonData = {
      props: buttonInfo,
      key: pageIndex,
      className: activeClass,
      text: pageIndex + 1
    }

    buttons.push(makeButton(buttonData))
  }

  if (numberOfPages > 1) {
    const firstPage = getButtonInfo(1)
    const lastPage = getButtonInfo(numberOfPages)

    buttons.unshift(makeButton({
      props: firstPage,
      key: 'first',
      text: '<<'
    }))
    buttons.push(makeButton({
      props: lastPage,
      key: 'last',
      text: '>>'
    }))
  }

  return (
    <div className='Paginator'>
      {buttons}
    </div>
  )
}

function makeButton (buttonData) {
  return (
    <div key={buttonData.key}>
      <Link
        {...buttonData.props}
        className={`${buttonData.props.className} ${buttonData.className || ''}`}
      >
        {buttonData.text}
      </Link>
    </div>
  )
}

function getButtonInfo (pageNumber) {
  return {
    to: pageNumber > 1 ? `${blogPagePrefix + pageNumber}` : '/',
    className: 'Paginator-button'
  }
}

function getInterval ({ pageNumber, numberOfPages, numberOfButtons }) {
  const humanPageNumber = pageNumber + 1
  const buttonsToShow = numberOfPages < numberOfButtons ? numberOfPages : numberOfButtons

  const delta = parseInt(buttonsToShow / 2)
  const deltaRight = delta
  const deltaLeft = buttonsToShow % 2 !== 0 ? delta : delta - 1

  const overRight = humanPageNumber + deltaRight > numberOfPages ? Math.abs(humanPageNumber + deltaRight - numberOfPages) : 0
  const overLeft = humanPageNumber - deltaLeft <= 0 ? Math.abs(humanPageNumber - deltaLeft - 1) : 0

  return {
    start: pageNumber + overLeft - deltaLeft - overRight,
    end: pageNumber + overLeft + deltaRight - overRight
  }
}

Paginator.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  numberOfButtons: PropTypes.number
}

Paginator.defaultProps = {
  numberOfButtons: 5
}

export default Paginator
