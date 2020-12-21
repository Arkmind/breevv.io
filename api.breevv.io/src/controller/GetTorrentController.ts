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


class GetTorrentController {
  public method: Method = 'get'
  public path = '/torrent/get'
  public router = Router()

  public client = new WebTorrentClient()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router[this.method](this.path, this.handleTorrentGet.bind(this))
  }

  private async handleTorrentGet(req: Request, res: Response, next: NextFunction) {
    const torrents = this.client.client.torrents

    console.log(torrents);
  }

  private async handleSocket() {

  }
}

export default GetTorrentController
