import { Divider, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import CommentsService from '../../features/posts/CommentsService.js'
import PostsService from '../../features/posts/PostsService.js'
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
      comments: await this.getAllPostComments()
    })
  }

  getIdFromUrl () {
    return window.location.pathname.replace('/', '')
  }

  async getPostById() {
    return await new PostsService().getPostById(this.postId)
  }

  async getAllPostComments() {
    return await new CommentsService().getAllPostComments(this.postId)
  }

  renderAllPostComments() {
    console.log(this.state.comments)
    return this.state.comments?.map((comment) => {
      return (
        <Stack>
          <Comment comment={comment}></Comment>
        </Stack>
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
        <Divider  sx={{ marginTop: '50px', borderBottomWidth: 5 }}/>
        <Typography variant='h4' sx={{ paddingTop: '50px', paddingBottom: '50px'}}>COMMENTS</Typography>
        <Stack>
          {this.renderAllPostComments()}
        </Stack>
        <CommentForm postId={this.postId}></CommentForm>
       </Paper>
      </>
    )
  }
}
 
export default FullPost