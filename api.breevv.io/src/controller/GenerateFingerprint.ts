import { Router, Request, Response, NextFunction } from 'express'
import { Torrent } from 'webtorrent'

import { MAGNET_NOT_STRING, NOT_MAGNET_URI, NO_TORRENT_PARAM } from '../config/error.messages'
import { isMagnet } from '../utils'
import { videoEXT } from '../config/extension'

import HttpSuccess from '../exceptions/HttpSuccess'
import HttpException from '../exceptions/HttpException'

import WebTorrentClient from '../classes/WebTorrentClient'

import Method from '../interfaces/method.interface'
import TMDb from '../classes/TMDb'


class Fingerprint {
  public method: Method = 'post'
  public path = '/fingerprint'
  public router = Router()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router[this.method](this.path, this.generateFingerprint.bind(this))
  }

  private async generateFingerprint(req: Request, res: Response, next: NextFunction) {
    const ip = req.connection.remoteAddress || req.headers['x-forwarded-for']

    const navigator = req.body.navigator

    const fingerprint = `
      ${ip}.
      ${navigator.appCodeName}.
      ${navigator.appName}.
      ${navigator.appVersion}.
      ${navigator.cookieEnabled}.
      ${navigator.languages.join(',')}.
      ${navigator.mimeTypes.map((e: Object) => Object.values(e).join(':')).join(',')}.
      ${navigator.platform}.
      ${navigator.product}.
      ${navigator.productSub}.
      ${navigator.userAgent}.
      ${navigator.vendor}.
      ${navigator.vendorSub}
    `.replace(/\s/g, '')

    console.log(fingerprint);
  }

  private async handleSocket() {

  }
}

export default Fingerprint
