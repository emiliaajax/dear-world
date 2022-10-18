import express from 'express'
import { PostsController } from '../../../controllers/api/posts-controller.js'

export const router = express.Router()

const controller = new PostsController()

router.param('id', (req, res, next, id) => controller.loadPost(req, res, next, id))

router.get('/',
  (req, res, next) => controller.findAllPosts(req, res, next)
)

router.post('/', 
  (req, res, next) => controller.createPost(req, res, next)
)

router.get('/:id',
  (req, res, next) => controller.findPost(req, res, next)
)
