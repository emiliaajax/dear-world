import { Divider, Paper, Typography, Stack } from '@mui/material'
import React from 'react'
import CommentsService from '../../services/CommentsService.js'
import PostsService from '../../services/PostsService.js'
import Comment from '../Comment/Comment.js'
import CommentForm from '../CommentForm/CommentForm.js'

class FullPost extends React.Component {
  constructor () {
    super()

    this.postId = this.getIdFromUrl()
    
    this.state = {
      post: {},
      comments: []
    }
  }

  async componentDidMount() {
    this.setState({ 
      post: await this.getPostById(),
      comments: await this.getAllPostComments(),
    })
  }

  getIdFromUrl () {
    return window.location.pathname.replace('/post/', '')
  }

  async getPostById() {
    return await new PostsService().getPostById(this.postId)
  }

  async getAllPostComments() {
    return await new CommentsService().getAllPostComments(this.postId)
  }

  renderAllPostComments() {
    return this.state.comments?.map((comment) => {
      return (
        <Comment key={comment._id} comment={comment}></Comment>
      )
    })
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
        <Divider  sx={{ marginTop: '50px', borderBottomWidth: 5, color: 'rgb(0, 100, 112)' }}/>
        <Typography variant='h4' sx={{ paddingTop: '50px' }}>{this.state.comments.length} COMMENTS</Typography>
        <Stack spacing={3}  sx={{ marginTop: '50px' }}>
          {this.renderAllPostComments()}
        </Stack>
        <Stack sx={{ marginTop: '70px' }}>
          <CommentForm postId={this.postId}></CommentForm>
        </Stack>
       </Paper>
      </>
    )
  }
}
 
export default FullPost