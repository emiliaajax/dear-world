import { Stack } from '@mui/material'
import React from 'react'
import Post from '../Post/Post.js'
// import { PostsSlice } from '../../features/posts/PostsSlice.js'
import PostsService from '../../features/posts/PostsService.js'

class Feed extends React.Component {
  constructor () {
    super()

    this.state = {}
    // this.posts = []
    this.getAllPosts()
  }

  async getAllPosts() {
    this.posts = await new PostsService().getAllPosts()
    console.log(this.posts)
    this.setState(this.posts)
  }

  renderAllPosts() {
    return this.posts?.map((post) => {
      return (
        <Post key={post._id} post={post}></Post>
      )
    })
  }

  render() { 
    return (
      <>
        <Stack>
          {this.renderAllPosts()}
        </Stack>
      </>
    )
  }
}
 
export default Feed
