import { Stack, Typography } from '@mui/material'
import React from 'react'

class Comment extends React.Component {
  render() {
    return (
      <>
        <Stack>
          <Typography>
            {this.props.comment.name}
          </Typography>
          <Typography>
            {this.props.comment.comment}
          </Typography>
        </Stack>
      </>
    )
  }
}
 
export default Comment
