import { AppBar, Box, List, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'

class Menu extends React.Component {
  render() { 
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Talk It Out
              </Typography>
              <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                  component='a'
                  href='/'>          
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                </ListItemButton>
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
