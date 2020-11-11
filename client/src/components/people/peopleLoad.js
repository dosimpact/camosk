import axios from "axios";

import peopleSample from "./peopleSample";

export default async () => {
    const targets = []
    /*
    const apiUrl = "https://cors-anywhere.herokuapp.com/http://www.safe182.go.kr/api/lcm/findChildList.do?esntlId=10000325&authKey=5be27ce7c69f41d7&rowSize=100&writngTrgetDscds=010&file2=192k"
    //010만 아니라 060, 070도 가능 
    const public_url = `${process.env.PUBLIC_URL}/samples`
    console.log(public_url)
    const targets = []
    const data = await axios.post(apiUrl,{},{  
    }).then(resp => resp.data).then(data => data.list)
    .catch(err => {
        console.error(err)
        return []
    })

    await (function(){
        return new Promise((res, _) => {
            for(let idx=0;idx<data.length;idx++) {
                if(data[idx].tknphotoFile === null) {
                    continue;
                }
                const key = data[idx].msspsnIdntfccd;
                const name = data[idx].nm;
                const gender = data[idx].sexdstnDscd
                const age = data[idx].age
                const ageNow = parseInt(data[idx].ageNow, 10)
                const clothes = data[idx].alldressingDscd
                const poster = Buffer.from(data[idx].tknphotoFile, "base64")
                targets.push({type: 0, key, name, gender, age, ageNow, clothes, poster})
            }
            res()
        })
    })()
    */
    const buf1 = await peopleSample("sample1.jpg")
    targets.push({type: 1, key: 1231, name: "이노원", gender: "남성", age :24, ageNow: 24, clothes: "일상복", poster: buf1})
    return targets
}

