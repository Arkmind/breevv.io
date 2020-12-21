const isUrl = (url: string): boolean => {
  return /^(https?):\/\/[^\s$.?#].[^\s]*$/g.test(url)
}

export default isUrl
