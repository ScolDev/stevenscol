import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import IconButton from '../icon-button/icon-button'
import { SVG } from '../../common/constants'

import './header.sass'

const Header = ({ title }) => {
  const [ theme, setTheme ] = useState('light')

  const toggledark = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    
    window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    let userTheme = window.localStorage.getItem('theme') || theme
    setTheme(userTheme)

    if (userTheme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return <header>
    <div className='Header'>
      <div className='Header-content'>
        <div className='Header-logo'>
          <IconButton to='/' icon='logo' />
        </div>
        <nav>
          <Link to='/profile'>Perfil</Link>
          <Link to='/blog'>Blog</Link>
          <IconButton onClick={ () => toggledark() } icon={ theme === 'dark' ? 'sun' : 'moon' } />
        </nav>
      </div>
    </div>
  </header>
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: ''
}

export default Header
