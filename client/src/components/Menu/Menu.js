import { AppBar, Box, List, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'

class Menu extends React.Component {
  render() { 
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: '#FAFAFA', boxShadow: '0px 0px 5px #D4D4D4' }}>
            <Toolbar>
              <Typography component='a' href='/' variant='h6' sx={{ flexGrow: 1, color: '#949494', textDecoration: 'none' }}>
                DEAR WORLD
              </Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                  component='a'
                  href='/create'>          
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    )
  }
}
 
export default Menu
