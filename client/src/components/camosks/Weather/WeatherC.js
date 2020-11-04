import React, { useEffect, useState } from 'react'
import OAuth from 'oauth';
import WeatherP from "./WeatherP"

// todo 날씨 데이터 얻어오기 
// 온도 , 날씨, 미세먼지 수치 ,half 크기의 컴포넌트로 설정

const fetchWeatherAPI = async (lat, lon, setInfo) => {
    const header = {
        "X-Yahoo-App-Id": "teLIBiT2"
    };
    const request = new OAuth.OAuth(
        null,
        null,
        'dj0yJmk9WUs1aWFUWEZyb3hNJmQ9WVdrOWRHVk1TVUpwVkRJbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWZl',
        '979af18993d638a9109d9e967f130e879667df4f',
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );
    request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=${lat}&lon=${lon}&format=json&u=c`,
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
            } else {
                const obj = JSON.parse(data)
                const information = obj["current_observation"]["condition"]
                setInfo(information)
            }
        }
    );
}

const WeatherC = (props) => {
    const [info, setInfo] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            const { coords: { latitude: lat, longitude: lon } } = pos;
            fetchWeatherAPI(lat, lon, setInfo)
        })
        const timer = setInterval(() => {
            navigator.geolocation.getCurrentPosition(pos => {
                const { coords: { latitude: lat, longitude: lon } } = pos;
                fetchWeatherAPI(lat, lon, setInfo)
            })
        }, 10800000)
        return () => clearInterval(timer);
    }, [])

    return (
        <>
            <WeatherP info={info} {...props} />
        </>
    )
}

export default WeatherC
