import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'

export class AnswerValidator {
  static create = (req: Request, res: Response, next: NextFunction) => {
    body('formId').exists().isString()
    body('list').exists().isArray({ min: 1 })
    next()
  }
}
