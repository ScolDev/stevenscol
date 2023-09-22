import React from 'react'
import BaseImage from '../base-image/BaseImage'
import useAvatarImageQuery from '../../../hooks/useAvatarImageQuery'

import './Avatar.sass'

const Avatar = (props) => {
  const avatar = useAvatarImageQuery()

  return (
    <picture className="Avatar">
      <BaseImage
        className="Avatar__image Avatar__image--rounded"
        image={avatar}
        alt="ScolDev"
        {...props}
      />
    </picture>
  )
}

export default Avatar
