import { Grid } from '@mui/material'
import React from 'react'
import SideMenu from '../Menu/Menu.js'

class BaseLayout extends React.Component {
  #children

  constructor (props) {
    super(props)
    this.#children = props.children ? props.children : null
  }

  /**
   * Returns the base layout used in the application.
   *
   * @returns {HTMLElement}
   */
  render() {
    return (
      <>
        <SideMenu></SideMenu>
        <Grid 
          container
          spacing={1} 
          sx={{ paddingTop: '50px', paddingBottom: '50px', paddingLeft: '50px', paddingRight: '50px' }}>
            <Grid item xs={12}>
              {this.#children}
            </Grid>
        </Grid>
      </>
    )
  }
}
 
export default BaseLayout