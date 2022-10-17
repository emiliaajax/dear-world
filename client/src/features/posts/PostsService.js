

export class PostsService {
  async getAllPosts() {
    const allPosts = await fetch(process.env.REACT_APP_POSTS_API)
    return allPosts.json()
  }

  async getPostById (id) {
    const post = await fetch(process.env.REACT_APP_POSTS_API + `/${id}`)
    return post.json()
  }

  async createPost() {

  }
}
 
export default PostsService

