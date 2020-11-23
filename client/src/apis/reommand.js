import axios from "axios"

const getRecommand = (target) => {
    const params = {
        "AgeRange00": "0",
        "AgeRange10": "0",
        "AgeRange20": "0",
        "AgeRange30": "0",
        "AgeRange40": "0",
        "AgeRange50": "0",
        "AgeRange60": "0",
        "AgeRange70": "0",
        "AgeRange80": "0",
        "Male": "0",
        "Female": "0",
        "Eyeglasses": "0",
        "Mustache": "0",
        "Smile": "0",
        "Sunglasses": "0",
        "ANGRY": "0",
        "HAPPY": "0",
        "SAD": "0",
        "CALM": "0"
    }
    const age1 = target.AgeRange.High
    const age2 = target.AgeRange.Low
    const ageAvg = Math.round(((age1 + age2) / 2) / 10) * 10;
    console.log("ageAvg", ageAvg);
    params[`AgeRange${ageAvg === 0 ? "00" : ageAvg}`] = "100"
    //params[`AgeRange${(age2 / 10) * 10}`] = "1"
    // params[`AgeRange${(age2/10) * 10}`] = 1
    // if (target.Gender.Value === "Male") {
    //     params.Male = 1
    // } else {
    //     params.Female = 1
    // }
    // if (target.Eyeglasses.Value === true) {
    //     params.Eyeglasses = 1
    // }
    // if (target.Mustache.Value === true) {
    //     params.Mustache = 1
    // }
    // if (target.Smile.Value === true) {
    //     params.Smile = 1
    // }
    // if (target.Sunglasses.Value === true) {
    //     params.Sunglasses = 1
    // }
    // target.Emotions.forEach(emo => {
    //     if(emo.Type === "ANGRY" && emo.Confidence > 80) {
    //         params.ANGRY = 1
    //     }
    //     if(emo.Type === "HAPPY" && emo.Confidence > 80) {
    //         params.HAPPY = 1
    //     }
    //     if(emo.Type === "SAD" && emo.Confidence > 80) {
    //         params.SAD = 1
    //     }
    //     if(emo.Type === "ANGRY" && emo.Confidence > 80) {
    //         params.CALM = 1
    //     }
    // })
    // 매개변수 작성
    // const body = qs.stringify(params)
    // console.log(params);
    // axios.post("http://133.186.221.101:3000/api/recommand", { ...params }
    // ).then(resp => resp.data)
    //     .then(data => {
    //         console.log(data.sucess)
    //         //setContent(data.url) // 동영상 주소 변경하는데 성공하면 setContent로 content 상태 변경
    //         //setAds(true) // setAds ads 상태 변경 함수로 ads 상태를 true로 변경
    //     })
    return axios.post("http://133.186.221.101:5000/api/recommand/v2", { ...params })

}

export { getRecommand }