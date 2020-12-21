import { NextFunction, Request, Response } from 'express'
import HttpSuccess from '../exceptions/HttpSuccess'

const imageMiddleware = (success: HttpSuccess, request: Request, response: Response, next: NextFunction) => {
  const data = success.content || ''
  response
  .status(200)
  .send({
    data,
  })
}

export default imageMiddleware
