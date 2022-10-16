import React from 'react'
import Post from '../Post/Post.js'

class Feed extends React.Component {
  constructor () {
    super()

    this.state = {}
  }

  getAllPosts (posts) {
    posts?.map((post) => {
      return (
        <Post post={post}></Post>
      )
    })
  }
  render() { 
    return (
      <></>
    )
  }
}
 
export default Feed;
