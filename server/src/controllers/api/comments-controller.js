import { Comment } from '../../models/comment.js'

export class CommentsController {
  async findPostComments (req, res, next) {
    try {
      const comments = await Comment.find({ postId: req.body.postId })

      res
        .status(200)
        .json(comments)
    } catch (error) {
      next(error)
    }
  }
}