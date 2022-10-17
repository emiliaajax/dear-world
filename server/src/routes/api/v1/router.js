import express from 'express'
import { router as postsRouter } from './posts-routes.js'

export const router = express.Router()

router.get('/', (req, res) => res.json({
  message: 'Welcome to version 1 of this API!'
}))

router.use('/', postsRouter)
