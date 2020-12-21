import WebTorrent, { Torrent } from 'webtorrent'

import { TORRENT_ALREADY_EXIST } from '../config/error.messages'

class WebTorrentClient
{
  public client = new WebTorrent()

  public add(torrent: string | Buffer): Promise<Torrent> {
    const { client } = this
    return new Promise((res, rej) => {
        const t = client.get(torrent)

        if (t) return rej(new Error(TORRENT_ALREADY_EXIST))

        client.add(torrent, { path: `${process.cwd()}/download` }, (torrent: Torrent) => res(torrent))
    })
  }
}

export default WebTorrentClient
