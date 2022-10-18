import { Card, CardActionArea, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
// import { Navigate } from 'react-router-dom'

class Post extends React.Component {
  constructor (props) {
    super()
    this.props = props
    this.id = props.post._id
    this.title = props.post.title
    this.author = props.post.author
    this.date = props.post.date
    this.text = props.post.text.slice(0, 520) + ' ...'

  }

  render() { 
    return (
      <> 
        <Card variant='outlined'>
          <CardActionArea href={this.id}>
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
