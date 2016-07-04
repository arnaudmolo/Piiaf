function parserCreator (balise) {
  return function (xml) {
    const res = xml.substring(xml.indexOf(`<${balise}>`) + balise.length + 2, xml.indexOf(`</${balise}>`))
    return res[0] !== '<' && res
  }
}

const getTitre = parserCreator('titre')
const getArtiste = parserCreator('artiste')
const getAlbum = parserCreator('album')
const getUrl = parserCreator('url')
const getDuree = parserCreator('duree')

const castNumb = n => n && +n

function xmlToJson (xml) {
  return {
    title: getTitre(xml),
    artist: getArtiste(xml),
    album: getAlbum(xml),
    url: getUrl(xml),
    duration: castNumb(getDuree(xml))
  }
}

export default xmlToJson
