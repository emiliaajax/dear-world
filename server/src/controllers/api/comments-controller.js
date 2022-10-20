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