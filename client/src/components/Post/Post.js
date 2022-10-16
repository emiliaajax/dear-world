import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

class Post extends React.Component {
  constructor (props) {
    super()
    console.log(props.post)
    this.post = props.post
    this.title = this.post.title
    this.author = this.post.author
    this.date = this.post.date
    this.text = this.post.text
  }

  render() { 
    return (
      <>
        <Card variant='outlined'>
          <CardHeader
            title={this.title}
            subheader={this.date}>
          </CardHeader>
          <CardContent>
            <Typography>
              {this.text}
            </Typography>
          </CardContent>
        </Card>
      </>
    )
  }
}
 
export default Post;
