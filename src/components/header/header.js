import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import IconButton from '../icon-button/icon-button'
import { SVG } from '../../common/constants'

import './header.sass'

const Header = ({ title }) => {
  const [ theme, setTheme ] = useState('dark')

  const toggleDarkMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)

    console.log(newTheme)
    // setTheme(savedtheme)
  }

  useEffect(() => {
    let userTheme = window.localStorage.getItem('theme') || theme
    console.log('userTheme', userTheme)

    if (userTheme === 'dark') {
      document.body.classList.add('darkMode')
    } else {
      document.body.classList.remove('darkMode')
    }
  })

  return <header>
    <div className='Header'>
      <div className='Header-content'>
        <div className='Header-logo'>
          <IconButton to='/' icon='logo' />
        </div>
        <nav>
          <Link to='/blog'>Blog</Link>
          <IconButton onClick={ () => toggleDarkMode() } icon={ theme === 'dark' ? 'sun' : 'moon' } />
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
