import { NextFunction, type Request, type Response } from 'express'
import { AnswerService } from '../../core/services/answer.service.js'
import { AnswerRepositoryImpl } from '../db/repositories/answer.repository.impl'

class AnswerController {
  constructor(readonly answerService: AnswerService) {}

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const answerBody = req.body
      const answerData = await this.answerService.createOne(answerBody)
      res.json(answerData)
    } catch (err) {
      next(err)
    }
  }
}

export const answerController = new AnswerController(new AnswerService(new AnswerRepositoryImpl()))
