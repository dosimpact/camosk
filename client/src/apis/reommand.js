import axios from "axios"
import { BASE_SERVER_URL } from "apis/config"
/*
FaceInfoCam target 
{BoundingBox: {…}, AgeRange: {…}, Smile: {…}, Eyeglasses: {…}, Sunglasses: {…}, …}
AgeRange: {Low: 12, High: 22}
Beard: {Value: false, Confidence: 91.94966888427734}
BoundingBox: {Width: 0.34092336893081665, Height: 0.5104877948760986, Left: 0.34339460730552673, Top: 0.17223891615867615}
Confidence: 99.995849609375
Emotions: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
Eyeglasses: {Value: true, Confidence: 99.59851837158203}
EyesOpen: {Value: true, Confidence: 99.95895385742188}
Gender: {Value: "Male", Confidence: 96.36856842041016}
Landmarks: (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
MouthOpen: {Value: false, Confidence: 92.85320281982422}
Mustache: {Value: false, Confidence: 97.7725601196289}
Pose: {Roll: -2.7022464275360107, Yaw: -16.649295806884766, Pitch: -12.724002838134766}
Quality: {Brightness: 78.08302307128906, Sharpness: 92.22801208496094}
Smile: {Value: false, Confidence: 97.17372131347656}
Sunglasses: {Value: false, Confidence: 98.87083435058594}
*/
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
    const ageLow = Math.round(((age2 + age2) / 2) / 10) * 10;
    console.log("ageAvg", ageAvg, "ageLow", ageLow);
    params[`AgeRange${ageAvg === 0 ? "00" : ageAvg}`] = "80"
    // params[`AgeRange${(age2/10) * 10}`] = 1
    if (target.Gender.Value === "Male") {
        params.Male = String(parseInt(target.Gender.Confidence));
    } else {
        params.Female = String(parseInt(target.Gender.Confidence));
    }
    if (target.Eyeglasses.Value === true) {
        params.Eyeglasses = String(parseInt(target.Eyeglasses.Confidence));
    }
    if (target.Mustache.Value === true) {
        params.Mustache = String(parseInt(target.Mustache.Confidence));
    }
    if (target.Smile.Value === true) {
        params.Smile = String(parseInt(target.Smile.Confidence));
    }
    if (target.Sunglasses.Value === true) {
        params.Sunglasses = String(parseInt(target.Sunglasses.Confidence));
    }
    target.Emotions.forEach(emo => {
        if (emo.Type === "ANGRY") {
            params.ANGRY = String(parseInt(emo.Confidence));
        }
        if (emo.Type === "HAPPY") {
            params.HAPPY = String(parseInt(emo.Confidence));
        }
        if (emo.Type === "SAD") {
            params.SAD = String(parseInt(emo.Confidence));
        }
        if (emo.Type === "ANGRY") {
            params.CALM = String(parseInt(emo.Confidence));
        }
    })
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
    console.log("api params", params);
    return axios.post(`${BASE_SERVER_URL}api/recommand/v2`, { ...params })

}

export { getRecommand }