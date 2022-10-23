import express from 'express'
import { router as postsRouter } from './posts-routes.js'
import { router as commentsRouter } from './comments-routes.js'

export const router = express.Router()

router.use('/comments', commentsRouter)
router.use('/', postsRouter)
