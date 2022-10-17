import express from 'express'
import createError from 'http-errors'
import { router as v1Router } from './api/v1/router.js'

export const router = express.Router()

router.get('/', (req, res) => res.json({
  message: 'Welcome to version 1 of this API'
}))

router.use('/api/v1', v1Router)

router.use('*', (req, res, next) => next(createError(404)))
