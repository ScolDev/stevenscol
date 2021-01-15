import PropTypes from 'prop-types'
import React from 'react'

import IconButton from '../icon-button/icon-button'
import { ICONS } from '../../common/constants'
import logo from '../../assets/logo1.svg'

import './header.sass'

const Header = ({ title }) => (
  <header>
    <div className='Header'>
      <div className='Header-content Section'>
        <div className='Header-logo'>
          <IconButton
            to='/'
            icon='logo'
          />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: ''
}

export default Header
