import { Router, Request, Response, NextFunction } from 'express'
import { Torrent } from 'webtorrent'

import HttpSuccess from '../exceptions/HttpSuccess'
import HttpException from '../exceptions/HttpException'

import Yggtorrent from '../classes/YggTorrent'
import WebTorrentClient from '../classes/WebTorrentClient'

import Method from '../interfaces/method.interface'
import TMDb from '../classes/TMDb'


class SearchTorrentController {
  public method: Method = 'get'
  public path = '/torrent/search/:query'
  public router = Router()

  public client = new WebTorrentClient()
  public ygg = new Yggtorrent()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router[this.method](this.path, this.handleTorrentAdd.bind(this))
  }

  private async handleTorrentAdd(req: Request, res: Response, next: NextFunction) {
    const { query } = req.params
  }

  private async handleSocket() {

  }
}

export default SearchTorrentController
