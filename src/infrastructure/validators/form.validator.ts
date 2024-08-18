import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'

export class FormValidator {
  static create = (req: Request, res: Response, next: NextFunction) => {
    body('layout').exists().isArray({ min: 1 })
    body('questions').exists().isArray({ min: 1 })
    body('name').optional().exists().isString()
    next()
  }

  static edit = (req: Request, res: Response, next: NextFunction) => {
    body('layout').optional().exists().isArray({ min: 1 })
    body('questions').optional().exists().isArray({ min: 1 })
    body('name').optional().exists().isString()
    next()
  }
}
