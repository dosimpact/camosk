import axios from "axios"
import { xml2json } from 'xml-js'

export default async () => {
    const apiUrl = 'https://cors-anywhere.herokuapp.com/http://openapi.gbis.go.kr/ws/rest/busstationservice/searcharound'
    const position = await (function () {
        return new Promise((res, _) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                const { coords: { latitude: lat, longitude: lon } } = pos
                res({ lat, lon })
            })
        })
    })()
    const x = 127.11238794518175 //position.lon
    const y = 37.32036519228536 //position.lat
    const apiKey = 'F958WxqdcNBa6Hgw%2BxwNxBr2NseHWX1M5p%2F%2F3ptj4GuJvJuTk%2FoAgwlDIEiGmbKqG8C%2BJ8RKUH0bTcZ5jyvKEg%3D%3D'

    const fullUrl = `${apiUrl}?serviceKey=${apiKey}&x=${x}&y=${y}`
    const station = await axios.get(fullUrl).then(resp => resp.data).then(data => {
        const response = xml2json(data, { spaces: 2 })
        const parsed = JSON.parse(response)
        const stations = parsed.elements[0].elements[2].elements[0].elements
        const stationId = stations.filter(el => el['name'] === 'stationId')[0]
        const station = stationId.elements[0].text
        return station
    })
    return station
}