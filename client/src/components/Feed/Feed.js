import { Stack } from '@mui/material'
import React from 'react'
import Post from '../Post/Post.js'

class Feed extends React.Component {
  constructor () {
    super()

    this.state = {}
    this.posts = [
      {
        id: '124dsA',
        title: 'This is a title',
        date: '16 October 2022',
        author: 'Emilia',
        text: 'This is a text'
      },
      {
        id: '124dsH',
        title: 'This is another title',
        date: '16 Mars 2022',
        author: 'Andreas',
        text: 'This is another text'
      }
    ]
  }

  renderAllPosts() {
    return this.posts?.map((post) => {
      return (
        <Post key={post.id} post={post}></Post>
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
