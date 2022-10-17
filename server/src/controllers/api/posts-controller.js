
import { Post } from '../../models/post.js'

export class PostsController {
  /**
   * Sends a JSON response containing all posts.
   *
   * @param {object} req Express request object.
   * @param {object} res Express response object.
   * @param {Function} next Express next middleware function.
   */
  async findAllPosts (req, res, next) {
    try {
      const posts = await Post.find()

      res
        .status(200)
        .json(posts)
    } catch (error) {
      next(error)
    }
  }

  async findPost (req, res, next, id) {
    try {
      const post = await Post.findById(id)

      res
        .status(201)
        .json(post)
    } catch (error) {
      next(error)
    }
  }
}
