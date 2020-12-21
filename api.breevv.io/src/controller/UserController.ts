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

  }

  private async handleSocket() {

  }
}

export default AddTorrentController
