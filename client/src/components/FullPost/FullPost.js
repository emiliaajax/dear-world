import { Paper, Typography } from '@mui/material'
import React from 'react'
import PostsService from '../../features/posts/PostsService'

class FullPost extends React.Component {
  constructor () {
    super()

    this.state = {
      post: {}
    }
  }

  getIdFromUrl () {
    return window.location.pathname.replace('/', '')
  }

  async getPostById() {
    return await new PostsService().getPostById(this.getIdFromUrl())
  }

  async componentDidMount() {
    this.setState({ post: await this.getPostById() })
  }

  render() {
    return (
      <>
       <Paper sx={{ padding: '10px', maxWidth: '800px', margin: '0 auto', boxShadow: 'none' }}>
        <Typography variant='h3'>
          {this.state.post.title}
        </Typography>
        <Typography sx={{ paddingTop: '20px' }}>
          {this.state.post.text}
        </Typography>
       </Paper>
      </>
    )
  }
}
 
export default FullPost