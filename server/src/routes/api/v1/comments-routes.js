import express from 'express'
import { CommentsController } from '../../../controllers/api/comments-controller.js'

export const router = express.Router()

const controller = new CommentsController()

router.param('id', (req, res, next, id) => controller.loadComments(req, res, next, id))

router.post('/', 
  (req, res, next) => controller.createComment(req, res, next)
)

router.get('/:id',
  (req, res, next) => controller.findPostComments(req, res, next)
)