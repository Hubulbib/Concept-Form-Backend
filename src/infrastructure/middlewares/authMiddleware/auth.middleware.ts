import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import { ApiError } from '../../exceptions/api.exception'

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const JWT_SECRET = process.env.SECRET_ACCESS_JWT
    if (!req.headers.authorization) return res.status(401).end()

    const accessToken = req.headers?.authorization.split(' ')[1]

    if (!accessToken) {
      return next(ApiError.UnauthorizedError()) //res.status(401).end()
    }

    const userData = jwt.verify(accessToken, JWT_SECRET)

    if (!userData || typeof userData === 'string') {
      return next(ApiError.BadRequest('Неверные данные')) //res.status(400).end()
    }

    // TODO: fix it
    // @ts-expect-error
    req.auth = {
      user: userData._doc,
      details: {
        ua: req.get('User-Agent'),
        ip: req.ip,
      },
    }

    next()
  } catch (err) {
    next(err)
  }
}
