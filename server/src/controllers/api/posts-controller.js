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

  /**
   * Sends a JSON response containing all posts by subject.
   *
   * @param {object} req Express request object.
   * @param {object} res Express response object.
   * @param {Function} next Express next middleware function.
   */
  async findPostsBySubject (req, res, next) {
    try {
      const posts = await Post.find({ subject: req.params.subject })

      req.posts = posts

      res
        .status(200)
        .json(posts)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends a JSON response containing one post.
   *
   * @param {object} req Express request object.
   * @param {object} res Express response object.
   * @param {Function} next Express next middleware function.
   */
  async findPost (req, res, next) {
    const post = await Post.findById(req.params.id)

    res
      .status(200)
      .json(post)
  }

  /**
   * Creates a new post.
   *
   * @param {object} req Express request object.
   * @param {object} res Express response object.
   * @param {Function} next Express next middleware function.
   */
  async createPost (req, res, next) {
    try {
      const post = new Post(req.body)

      await post.save()

      const location = new URL(
        `${req.protocol}://${req.get('host')}${req.baseUrl}/${post._id}`
      )

      res
        .location(location.href)
        .status(201)
        .json({
          id: post.id
        })
    } catch (error) {
      next(error)
    }
  }
}
