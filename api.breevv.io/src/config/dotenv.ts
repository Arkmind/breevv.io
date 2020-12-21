import path from 'path'
import dotenv from 'dotenv'

let dir

switch (process.env.NODE_ENV) {
  case "production":
    dir = path.join(__dirname, '../../.env.production')
    break
  default:
    dir = path.join(__dirname, '../../.env.development')
}

dotenv.config({ path: dir })

export const APP_PORT = Number(process.env.APP_PORT) || 80
export const TMDB_KEYS = (process.env.TMDB_KEYS || '').split(',')
export const PG_HOST = process.env.PG_HOST || ''
export const PG_USER = process.env.PG_USER || ''
export const PG_PASS = process.env.PG_PASS || ''
export const PG_BASE = process.env.PG_BASE || ''
