import { Grid } from '@mui/material'
import React from 'react'
import Post from '../Post/Post.js'
import PostsService from '../../features/posts/PostsService.js'

class Feed extends React.Component {
  constructor () {
    super()

    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    this.setState({ posts: await this.getAllPosts() })
  }

  async getAllPosts() {
    return await new PostsService().getAllPosts()
  }

  renderAllPosts() {
    return this.state.posts?.map((post) => {
      return (
        <Grid item xs={4}>
          <Post key={post._id} post={post}></Post>
        </Grid>
      )
    })
  }

  render() { 
    return (
      <>
        <Grid container spacing={5}>
          {this.renderAllPosts()}
        </Grid>
      </>
    )
  }
}
 
export default Feed
