import { AppBar, Toolbar, Container, MenuItem, Stack, ListItemIcon } from '@mui/material'
import React from 'react'
import { Subjects } from '../../utils/enum/subjects.js'
import AddIcon from '@mui/icons-material/Add.js'

class Menu extends React.Component {
  renderMenuItems() {
    return Object.values(Subjects).map((subject) => {
      const location = `/${subject}`
      return (
        <MenuItem
          key={subject}
          component='a'
          href={location}>
          {subject}
        </MenuItem>
      )
    })
  }

  render() { 
    return (
      <>
        <AppBar position="static" sx={{ backgroundColor: '#FAFAFA', color: '#222', boxShadow: 'none' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Stack direction='row' spacing={2} sx={{ margin: '0 auto' }}>
                <MenuItem 
                  component='a'
                  href='/'>
                  All
                </MenuItem>
                {this.renderMenuItems()}
                <MenuItem
                  component='a'
                  href='/create'>          
                  <ListItemIcon>
                    <AddIcon sx={{ color: 'rgb(0, 100, 112)' }} fontSize='large'/>
                  </ListItemIcon>
                </MenuItem>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </>
    )
  }
}
 
export default Menu
