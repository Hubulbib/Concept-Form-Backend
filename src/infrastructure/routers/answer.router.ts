import { Router } from 'express'
import { answerController } from '../controllers/answer.controller.js'
import { AnswerValidator } from '../validators/answer.validator'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Answers
 *   description: Answer management
 */

/**
 * @swagger
 * /answers:
 *   post:
 *     summary: Create a new answer
 *     tags: [Answers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerCreateBodyDto'
 *     responses:
 *       201:
 *         description: The answer of form was created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerEntity'
 *       401:
 *         description: Not authorized
 */
router.post('/', [AnswerValidator.create], answerController.createOne)

export const answerRouter = router
