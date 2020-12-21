import fs from 'fs'
import util from 'util'

import App from './App'

import { APP_PORT } from './config/dotenv'

import AddTorrentController from './controller/AddTorrentController'
import GetTorrentController from './controller/GetTorrentController'
import SearchTorrentController from './controller/SearchTorrentController'

import './handler/prototype.all'

const logFile = fs.createWriteStream(
  `${process.cwd()}/var/log/${process.env.NODE_ENV || 'development'}.log`,
  {flags : 'w'}
);

const log = global.console.log

global.console.log = (str?: string, parameters?: any) => {
  logFile.write(`${util.format(str)}\n`)

  if (parameters) return log(str, parameters)
  return log(str)
}

const server = new App([
  new AddTorrentController(),
  new GetTorrentController(),
  new SearchTorrentController(),
], APP_PORT)

server.listen()
