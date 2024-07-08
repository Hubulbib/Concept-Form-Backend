import { Router } from 'express'
import { answerController } from '../controllers/answer.controller.js'

const router = Router()

router.post('/', [], answerController.createOne)

export const answerRouter = router
