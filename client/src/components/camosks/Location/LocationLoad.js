import axios from 'axios';

export default async () => {
    if('geolocation' in navigator) {
        const position = await new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                const {coords: {latitude: lat, longitude: lon}} = pos;
                const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&language=ko&key=AIzaSyA_UPL73uIA9dzjlVqa4daM1GDnmfEmkek`
                axios.get(geocodeURL).then(resp => resp.data)
                .then(data => {
                    res(data.results[0]["formatted_address"])
                }).catch(err => {
                    console.error(err)
                    rej("위치 불명, 알수없음")
                })
            })
        })
        return position
    } else {
        console.log('No Coordinates!')
        return "위치 불명, 알수없음"
    }
}