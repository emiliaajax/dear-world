import { Stack } from '@mui/material'
import React from 'react'
import Post from '../Post/Post.js'

class Feed extends React.Component {
  constructor () {
    super()

    this.state = {}
    this.posts = [{
      title: 'This is a title',
      date: '16 October 2022',
      author: 'Emilia',
      text: 'This a text'
    }]
  }

  getAllPosts () {

  }
  render() { 
    return (
      <>
        <Stack>
          {this.posts?.map((post) => {
            return (
              <Post post={post}></Post>
            )
          })}
        </Stack>
      </>
    )
  }
}
 
export default Feed;
