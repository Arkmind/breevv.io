declare interface Config {
  host: string,
  searchhost: string,
  username: string,
  password: string,
}

declare interface YggTorrent {
  url?: string,
  name?: string,
  size?: string,
  downloadurl?: string,
}

declare interface YggRatio {
  upload?: string,
  download?: string,
  ratio?: string | number,
}

declare interface LoginCallback {
  (err: Error, body?: any): void
}

declare interface SearchCallback {
  (err: Error, results?: Array<YggTorrent>): void
}

declare interface RatioCallback {
  (err: Error, results?: YggRatio)
}

declare class Ygg {
  constructor(config: Config): void
  login(callback: LoginCallback): void
  getRatio(callback: RatioCallback): void
  search(name: string, callback: SearchCallback): void
}

declare module 'yggtorrent-api' {
  export default Ygg
}
