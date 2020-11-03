import React, { useEffect, useState } from 'react'
import OAuth from 'oauth';

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

function WeatherP() {
    const [info, setInfo] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            const {coords: {latitude: lat, longitude: lon}} = pos;
            fetchWeatherAPI(lat, lon, setInfo)
        })
        const timer = setInterval(() => {
            navigator.geolocation.getCurrentPosition(pos => {
                const {coords: {latitude: lat, longitude: lon}} = pos;
                fetchWeatherAPI(lat, lon, setInfo)
            })    
        }, 10800000)
        return () => clearInterval(timer);
    },[])
    if(info === null){
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <h4>{info.text}</h4>
                <h5>{info.temperature}C</h5>
            </div>
        )
    }
}

export default WeatherP
