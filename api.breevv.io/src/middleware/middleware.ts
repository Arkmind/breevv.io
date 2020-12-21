import { NextFunction, Request, Response } from 'express'

import imageMiddleware from './success.middleware'
import errorMiddleware from './error.middleware'

import HttpException from '../exceptions/HttpException';
import HttpSuccess from '../exceptions/HttpSuccess'

const middleware = (http: HttpSuccess | HttpException, request: Request, response: Response, next: NextFunction) => {
  if (http instanceof HttpSuccess) return imageMiddleware(http, request, response, next)

  return errorMiddleware(http, request, response, next)
}

export default middleware
