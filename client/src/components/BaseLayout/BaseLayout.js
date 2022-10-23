import { Grid } from '@mui/material'
import React from 'react'
import SideMenu from '../Menu/Menu.js'

class BaseLayout extends React.Component {
  constructor (props) {
    super(props)
    this.children = props.children ? props.children : null
  }

  render() {
    return (
      <>
        <SideMenu></SideMenu>
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
 
export default BaseLayout