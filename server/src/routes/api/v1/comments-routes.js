import express from 'express'
import { CommentsController } from '../../../controllers/api/comments-controller.js'

export const router = express.Router()

const controller = new CommentsController()

router.get('/',
  (req, res, next) => controller.findPostComments(req, res, next)
)

router.post('/', 
  (req, res, next) => controller.createComment(req, res, next)
)