import fetch from 'node-fetch'
import { TMDbMedia, TMDbResponse } from '../interfaces/tmdbresponse.interface'
import { NO_RESULT_FOUND } from '../config/error.messages'
import { TMDB_KEYS } from '../config/dotenv'

class TMDb {
  private key = ''
  private baseURI = 'https://api.themoviedb.org/3/'
  private language = 'fr-FR'
  private imageURI = 'http://image.tmdb.org/t/p/'
  private size = [
    'w500',
    'original'
  ]

  public async getKey() {
    this.key = await this.getRandomKey()
  }

  public async search(query: string): Promise<TMDbResponse> {
    const url = this.addParameter('query', query, this.createURL('search/multi'))

    try {
      const response = await fetch(url)
      return response.json()
    } catch (error) {
      throw error
    }
  }

  public async getMostAccurateResult(query: string): Promise<TMDbMedia> {
    try {
      const response = await this.search(query);

      if (response.results.length < 0) throw { error: 400, message: NO_RESULT_FOUND }

      const result = response.results[0]

      return {
        ...result,
        poster_path: `${this.imageURI}${this.size[1]}${result.poster_path}`,
        backdrop_path: `${this.imageURI}${this.size[1]}${result.backdrop_path}`,
      }
    } catch (error) {
      throw error
    }
  }

  private async getRandomKey(): Promise<string> {
    const rand = Math.floor(Math.random() * TMDB_KEYS.length)

    const key = TMDB_KEYS[rand]

    const test = await this.testKey(key)

    if (!test) console.log(`[ERR] Key not available anymore : ${key}`)
    if (!test) return await this.getRandomKey()

    return key
  }

  private async testKey(key: string) {
    const url = this.createURL('discover/movie', key)

    try {
      const response = await fetch(url)

      const json = await response.json()

      if (json.success === false) return false
      return true
    } catch (error) {
      return false
    }
  }

  private createURL(value: string = '', key: string = this.key): string {
    return `${this.baseURI}${value}?api_key=${key}&language=${this.language}`
  }

  private addParameter(key: string, value: string, base: string = this.createURL()) {
    return `${base}&${key}=${value}`
  }
}

export default TMDb
