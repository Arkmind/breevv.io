import atob from './atob'

const b64toBlob = (b64) => {
  const bytes = atob(b64)
  const length = new Array(bytes.length)

}
