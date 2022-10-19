import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import PostsService from '../../features/posts/PostsService.js'
import CommentForm from '../CommentForm/CommentForm.js'

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
        <Typography sx={{ paddingTop: '30px' }}>
          {this.state.post.text}
        </Typography>
        <Divider  sx={{ marginTop: '50px', borderBottomWidth: 5 }}/>
        <Typography variant='h4' sx={{ paddingTop: '50px', paddingBottom: '50px'}}>COMMENTS</Typography>
        <CommentForm></CommentForm>
       </Paper>
      </>
    )
  }
}
 
export default FullPost