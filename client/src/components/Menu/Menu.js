import { AppBar, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

class Menu extends React.Component {
  state = {  } 
  render() { 
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Talk It Out
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    )
  }
}
 
export default Menu
