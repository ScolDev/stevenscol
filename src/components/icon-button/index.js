import React from 'react'
import { Link } from 'gatsby'
import isValidMail from 'validate-mail'
import Icon from '../icon'

const IconButton = (props) => {
  const { to, icon, external } = props
  return (
    to ? (
      external
        ? <a target="_blank" href={ to }><Icon icon={ icon } /></a>
        : <Link to={ to }><Icon icon={ icon } /></Link>
    ) : <Icon icon={ icon } {...props} />
  )
}

export default IconButton
