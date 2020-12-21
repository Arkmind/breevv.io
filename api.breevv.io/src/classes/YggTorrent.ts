import fetch from 'node-fetch'
import TorrentIndexer from 'torrent-indexer'

interface YggOptions {
  url?: string,
  method?: string,
  ssl?: Boolean,
  protocol?: string,
  username?: string,
  password?: string,
}

interface YggSearchQueries {
  name: string,
  description?: string,
  category?: string | number,
  sub_category?: string | number,
}

class YggTorrent {
  constructor() {
    this.test()
  }

  async test() {
    const torrentIndexer = new TorrentIndexer();

    const results = await torrentIndexer.search("rick and morty s04e04");

    console.log(results);
  }


}

export default YggTorrent
