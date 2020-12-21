const isMagnet = (str: string): boolean => {
  return /magnet:\?xt=(urn:btih|btih|urn):[a-z0-9]{20,50}/i.test(str)
}

export default isMagnet
