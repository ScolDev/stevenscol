import React from 'react'
import { Link } from 'gatsby'
import isValidMail from 'validate-mail'
import Icon from '../icon/icon'

const IconButton = props => {
  const action = props.to || ''
  return (
    (action.startsWith('/'))
      ? <Link to={action}>
        <Icon {...props} />
        </Link>
      : <a href={isValidMail(action) ? `mailto:${action}` : action} target='blank'>
        <Icon {...props} />
        </a>
  )
}

export default IconButton
