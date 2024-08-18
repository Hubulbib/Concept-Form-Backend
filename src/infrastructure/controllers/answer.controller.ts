import { NextFunction, type Request, type Response } from 'express'
import { AnswerService } from '../../core/services/answer.service.js'
import { AnswerRepositoryImpl } from '../db/repositories/answer.repository.impl'
import { validationResult } from 'express-validator'
import { ApiError } from '../exceptions/api.exception'

class AnswerController {
  constructor(readonly answerService: AnswerService) {}

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка данных', errors.array()))
      }
      const answerBody = req.body
      const answerData = await this.answerService.createOne(answerBody)
      res.status(201).json(answerData)
    } catch (err) {
      next(err)
    }
  }
}

export const answerController = new AnswerController(new AnswerService(new AnswerRepositoryImpl()))
