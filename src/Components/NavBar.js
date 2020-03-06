import React from 'react'

import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { AccountCircle, Mail as MailIcon, Menu as MenuIcon, Notifications as NotificationsIcon } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar position="static">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography color="inherit">
          React & Material-UI Application
          </Typography>
          <div className={classes.grow} />
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton edge="end"
          aria-label="account of current user"
          //aria-controls={menuId}
          aria-haspopup="true"
          //onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar