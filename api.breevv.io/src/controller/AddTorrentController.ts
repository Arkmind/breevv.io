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


class AddTorrentController {
  public method: Method = 'post'
  public path = '/torrent/add'
  public router = Router()

  public client = new WebTorrentClient()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router[this.method](this.path, this.handleTorrentAdd.bind(this))
  }

  private async handleTorrentAdd(req: Request, res: Response, next: NextFunction) {
    const { magnet, base64 } = req.body

    if (!magnet && !base64) return next(new HttpException(400, NO_TORRENT_PARAM))

    if (magnet && typeof magnet !== 'string') return next(new HttpException(400, MAGNET_NOT_STRING))
    if (magnet && !isMagnet(magnet)) return next(new HttpException(400, NOT_MAGNET_URI))

    const buffer = (base64) ? Buffer.from(base64, 'base64') : null

    try {
      const torrent: Torrent = await this.client.add(magnet || buffer)

      const video = torrent.files.map(e => e.name).filter(e => e.endsWithAny(videoEXT))

      const tmdb = new TMDb()

      await tmdb.getKey()

      const media = video.map(e => e.replace(/\.(.*)/g, ''))

      const datas = await Promise.all(media.map(async e => {
        return await tmdb.getMostAccurateResult(e)
      }))

      return next(new HttpSuccess(datas))
    } catch (error) {
      return next(new HttpException(400, error.message))
    }
  }

  private async handleSocket() {

  }
}

export default AddTorrentController
