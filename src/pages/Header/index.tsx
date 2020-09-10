import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static" variant="outlined">
      <Toolbar>
        <Typography component={Link} to="/" variant="h6" noWrap>
          Image Gallery
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
