import React, { useEffect, useState } from 'react'

import IconLink from '../../molecules/icon-link/IconLink'
import BaseLink from '../../molecules/base-link/BaseLink'

import './Header.sass'

const Header = () => {
  const [theme, setTheme] = useState('dark')

  const toggledark = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const userTheme = window.localStorage.getItem('theme') || theme
    setTheme(userTheme)

    if (userTheme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

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
            {/* <IconButton
              icon={theme === 'dark' ? 'sun' : 'moon'}
              onClick={toggledark}
            /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
