import { Grid } from '@mui/material'
import React from 'react'
import Post from '../Post/Post.js'
import PostsService from '../../services/PostsService.js'

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
    let posts = []
    if (window.location.pathname === '/') {
      posts = await new PostsService().getAllPosts()
    } else {
      const subject = window.location.pathname.replace('/', '')
      posts = await new PostsService().getPostsBySubject(subject)
    }
    return posts
  }

  renderAllPosts() {
    return this.state.posts?.reverse().map((post) => {
      return (
        <Grid key={post._id} item xs={4}>
          <Post post={post}></Post>
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
