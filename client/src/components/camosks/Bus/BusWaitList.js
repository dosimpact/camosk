import axios from 'axios'
import busStationLoad from './BusStationLoad'
export default async () => {
    const stationId = await busStationLoad()
    const busApiUrl = `https://cors-anywhere.herokuapp.com/http://m.gbis.go.kr/search/getBusStationArrival.do?stationId=${stationId}&osInfoType=M`

    const busWaitList = await axios.get(busApiUrl, {
        headers: {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36 Edg/87.0.664.41"
        }
    }).then(async resp => {
        const objects = []
        const list = resp.data.busStationArrivalInfo.arrivalList
        for(let i = 0; i < list.length; i++){
            const flag = await list[i].flag
            const busName = await list[i].routeName;
            const destination = await list[i].routeDestName;
            const time = await list[i].predictTime1.length === 0 ? "잠시 후 도착" : list[i].predictTime1
            const location = await list[i].locationNo1.length === 0 ? '버스 정보가 없습니다.' : list[i].locationNo1 
            objects.push({flag, busName, destination, time, location})
        }
        return objects
    })
    return busWaitList
}