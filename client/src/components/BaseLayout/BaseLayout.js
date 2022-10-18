import { Grid } from "@mui/material";
import React from "react";

class BaseLayout extends React.Component {
  constructor (props) {
    super()
    this.children = props.children ? props.children : null
  }

  render() { 
    return (
      <>
        <Grid 
          container
          spacing={1} 
          sx={{ paddingTop: '20px', paddingBottom: '10px', paddingLeft: '50px', paddingRight: '50px' }}>
            <Grid item xs={12}>
              {this.children}
            </Grid>
        </Grid>
      </>
    )
  }
}
 
export default BaseLayout;