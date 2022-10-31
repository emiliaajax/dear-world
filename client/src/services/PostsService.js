/**
 * Encapsulates calls to posts API related to posts.
 */
export default class PostsService {
  async getAllPosts() {
    const allPosts = await fetch(process.env.REACT_APP_POSTS_API)
    return await allPosts.json()
  }

  async getPostsBySubject(subject) {
    const posts = await fetch(process.env.REACT_APP_POSTS_API + subject)
    return await posts.json()
  }

  async getPostById (id) {
    const post = await fetch(process.env.REACT_APP_POSTS_API + 'post/' + id)
    return await post.json()
  }

  async createPost(data) {
    const post = await fetch(process.env.REACT_APP_POSTS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return post.json()
  }
}

