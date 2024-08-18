import { NextFunction, type Request, type Response } from 'express'
import { validationResult } from 'express-validator'
import { FormService } from '../../core/services/form.service.js'
import { FormRepositoryImpl } from '../db/repositories/form.repository.impl.js'
import { type IAuthRequest } from '../interfaces/auth.request.interface.js'
import { ApiError } from '../exceptions/api.exception'

class FormController {
  constructor(readonly formService: FormService) {}

  getAll = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    try {
      const formData = await this.formService.getAll(req.auth.user.uuid)
      res.json(formData)
    } catch (err) {
      next(err)
    }
  }

  getOneById = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const formData = await this.formService.getOneById(id, req.auth.user.uuid)
      res.json(formData)
    } catch (err) {
      next(err)
    }
  }

  getLayout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const formData = await this.formService.getLayout(id)
      res.json(formData)
    } catch (err) {
      next(err)
    }
  }

  createOne = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка данных', errors.array()))
      }
      const formBody = req.body
      const formData = await this.formService.createOne({ ...formBody, userId: req.auth.user.uuid })
      res.status(201).json(formData)
    } catch (err) {
      next(err)
    }
  }

  editOne = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка данных', errors.array()))
      }
      const { id } = req.params
      const formBody = req.body
      await this.formService.editOne(id, formBody, req.auth.user.uuid)
      res.end()
    } catch (err) {
      next(err)
    }
  }

  removeOne = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      await this.formService.removeOne(id, req.auth.user.uuid)
      res.end()
    } catch (err) {
      next(err)
    }
  }
}

export const formController = new FormController(new FormService(new FormRepositoryImpl()))
