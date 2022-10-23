import { Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Menu from '../Menu/Menu.js'
import SideMenu from '../SideMenu/SideMenu.js'

class SecondaryLayout extends React.Component {
  constructor (props) {
    super(props)
    this.children = props.children ? props.children : null
  }

  render() {
    return (
      <>
        <Stack>
          <Menu></Menu>
          <SideMenu></SideMenu>
        </Stack>
        <Grid 
          container
          spacing={1} 
          sx={{ paddingTop: '50px', paddingBottom: '50px', paddingLeft: '50px', paddingRight: '50px' }}>
            <Grid item xs={12}>
              {this.children}
            </Grid>
        </Grid>
      </>
    )
  }
}
 
export default SecondaryLayout