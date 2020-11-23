import axios from 'axios'
import peopleSample from '../People/PeopleSample' // 우리 샘플 불러오기 위해 잠시 people 컴포넌트의 일부분을 사용
import CriminalData from './CiminalData'

export default async () => {
    const objects = []
    const list = CriminalData()
    /*
    for(let i = 0; i < list.length; i++){
        const filepath = `/criminals/${i}.jpg`
        const buf = await axios.get(filepath, {
            responseType: 'arraybuffer'
        }).then(resp => resp.data).then(data => Buffer.from(data, 'binary')).catch(err => {
            console.error(err)
            return Buffer.from(null)
        })
        const {id, name, term, cause} = list[i]
        objects.push({id, name, term, cause, poster: buf})
    }
    */
    const bufferSample1 = await peopleSample("sample1.jpg")
    const bufferSample2 = await peopleSample("sample2.jpg")
    objects.push({id: '100', name: '이노원', term: '2020-07-01~2020-12-31', cause: '불명', poster: bufferSample1})
    objects.push({id: '101', name: '김도영', term: '2020-07-01~2020-12-31', cause: '불명', poster: bufferSample2})
    return objects
}