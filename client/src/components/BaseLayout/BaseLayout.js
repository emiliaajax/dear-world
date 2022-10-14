import { Stack } from "@mui/system";
import React from "react";

class BaseLayout extends React.Component {
  constructor (props) {
    super()
    this.children = props.children ? props.children : null
  }

  render() { 
    return (
      <Stack 
        direction='row' 
        spacing={1} 
        sx={{ paddingTop: '20px', paddingBottom: '10px', paddingLeft: '20px' }}>
          {this.children}
      </Stack>
    )
  }
}
 
export default BaseLayout;