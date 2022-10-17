import express from 'express'
import { router as postsRouter } from './posts-routes.js'

export const router = express.Router()

router.use('/', postsRouter)
