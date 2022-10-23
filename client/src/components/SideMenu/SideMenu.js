import { AppBar, Toolbar, Container, MenuItem } from '@mui/material'
import React from 'react'

class SideMenu extends React.Component {
  state = {  } 
  render() { 
    return (
      <>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', color: '#222', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MenuItem 
              component='a'
              href='/'>
              All
            </MenuItem>
            <MenuItem 
              component='a'
              href='/Test'>
              Test
            </MenuItem>
            <MenuItem
              component='a'
              href='/Test2'>
              Test2
            </MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
      </>
    )
  }
}
 
export default SideMenu
