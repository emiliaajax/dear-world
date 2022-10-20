
export default class PostsService {
  async getAllPosts() {
    const allPosts = await fetch(process.env.REACT_APP_POSTS_API)
    return await allPosts.json()
  }

  async getPostById (id) {
    const post = await fetch(process.env.REACT_APP_POSTS_API + `${id}`)
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

