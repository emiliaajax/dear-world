import fetch from 'node-fetch'

export class PostsService {
  async getAllPosts() {
    const allPosts = await fetch(process.env.REACT_APP_POSTS_API)
    return JSON.parse(allPosts)
  }

  async getPostById (id) {
    const post = await fetch(process.env.REACT_APP_POSTS_API + `${id}`)
    return JSON.parse(post)
  }

  async createPost() {
    
  }
}
 
export default PostsService

