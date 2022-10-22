import { Comment } from '../../models/comment.js'

export class CommentsController {
  async loadComments (req, res, next, id) {
    try {
      const comments = await Comment.find({ postId: id })

      req.comments = comments

      next()
    } catch (error) {
      next(error)
    }
  }

  async findPostComments (req, res, next) {
    try {
      res
        .status(200)
        .json(req.comments)
    } catch (error) {
      next(error)
    }
  }

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
