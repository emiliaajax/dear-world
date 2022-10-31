import { Comment } from '../../models/comment.js'

export class CommentsController {
  /**
   * Provides req.comments to the routes if id is present.
   *
   * @param {object} req Express request object.
   * @param {object} res Express response object.
   * @param {Function} next Express next middleware function.
   * @param {string} id The value of the id.
   */
  async loadComments (req, res, next, id) {
    try {
      const comments = await Comment.find({ postId: id })

      req.comments = comments

      next()
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends a JSON response containing all comments of a post.
   *
   * @param {object} req Express request object.
   * @param {object} res Express response object.
   * @param {Function} next Express next middleware function.
   */
  async findPostComments (req, res, next) {
    try {
      res
        .status(200)
        .json(req.comments)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a new comment.
   *
   * @param {object} req Express request object.
   * @param {object} res Express response object.
   * @param {Function} next Express next middleware function.
   */
  async createComment (req, res, next) {
    try {
      const comment = new Comment(req.body)

      await comment.save()

      const location = new URL(
        `${req.protocol}://${req.get('host')}${req.baseUrl}/${comment._id}`
      )

      res
        .location(location.href)
        .status(201)
        .json({
          id: comment.id
        })
    } catch (error) {
      next(error)
    }
  }
}
