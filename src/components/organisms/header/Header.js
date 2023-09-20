import React, { useEffect, useState } from 'react'

import ToggleThemeButton from '../../molecules/toggle-theme-button/ToggleThemeButton'
import IconLink from '../../molecules/icon-link/IconLink'
import BaseLink from '../../molecules/base-link/BaseLink'

import './Header.sass'

const Header = () => {
  return (
    <header>
      <div className="Header">
        <div className="Header__content">
          <div className="Header__logo">
            <IconLink
              to="/"
              icon="logo"
            />
          </div>
          <nav>
            <BaseLink to="/profile">Perfil</BaseLink>
            <BaseLink to="/blog">Blog</BaseLink>
            <ToggleThemeButton />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
