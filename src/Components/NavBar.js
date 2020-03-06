import React from 'react'

import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const NavBar = () => {

  return (
    <AppBar>
      <Toolbar position="static">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography color="inherit">
          React & Material-UI Application
          </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar