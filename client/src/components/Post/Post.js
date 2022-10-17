import { Card, CardActionArea, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

class Post extends React.Component {
  constructor (props) {
    super()
    this.title = props.post.title
    this.author = props.post.author
    this.date = props.post.date
    this.text = props.post.text
  }

  openPost() {
    console.log('opened')
  }

  render() { 
    return (
      <>
        <Card variant='outlined'>
          <CardActionArea onClick={this.openPost}>
            <CardHeader
              title={this.title}
              subheader={this.date}>
            </CardHeader>
            <CardContent>
              <Typography>
                {this.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    )
  }
}
 
export default Post
