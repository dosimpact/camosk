import axios from 'axios'

export default async (filename) => {
    const baseUrl = `/sample/${filename}`
    const buf = await axios.get(baseUrl, {
        // Set Type of Response ArrayBuffer to Convert Response to Buffer Array Conveniently
        responseType: 'arraybuffer'
    }).then(resp => resp.data)
    .then(data => Buffer.from(data, 'binary')).catch(err => {
        console.error(err)
        return Buffer.from(null)
    })
    return buf
}