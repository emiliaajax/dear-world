
export default class CommentsService {
  async getAllPostComments(id) {
    const allPostComments = await fetch(process.env.REACT_APP_POSTS_API + 'comments', {
      method: 'GET',
      body: JSON.stringify(id)
    })
    return await allPostComments.json()
  }

  async createPost(data) {
    const comment = await fetch(process.env.REACT_APP_POSTS_API + 'comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return comment.json()
  }
}
