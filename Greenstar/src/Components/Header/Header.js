import React, { useState } from 'react'
import { useStyles } from './styles'
import clsx from 'clsx'

import logo from '../../Assets/images/logo.png'

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.maincontainer}>
      <img src={logo} alt='logo' />
    </div>
  )
}

export default Header
