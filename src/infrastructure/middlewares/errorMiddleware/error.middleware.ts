import { Request, Response } from 'express'
import { ApiError } from '../../exceptions/api.exception'

export const ErrorMiddleware = (err: ApiError, req: Request, res: Response) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors })
  }
  return res.status(500).json({ message: 'Непредвиденная ошибка' })
}
