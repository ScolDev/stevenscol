import React, { useEffect, useState } from 'react'
import IconButton from '../icon-button/IconButton'

const ToggleThemeButton = () => {
  const [theme, setTheme] = useState('dark')

  const toggledark = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const userTheme = window.localStorage.getItem('theme') || theme
    setTheme(userTheme)

    if (userTheme === 'light') {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }
  }, [theme])

  return (
    <IconButton
      icon={theme === 'dark' ? 'sun' : 'moon'}
      onClick={toggledark}
    />
  )
}

export default ToggleThemeButton
