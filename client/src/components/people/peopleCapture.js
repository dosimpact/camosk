import React, {useState, useEffect, useRef} from 'react';
import AWS from 'aws-sdk'
import Webcam from "react-webcam";

import compareFaces from "../compare/compareFace";
import peopleLoad from './peopleLoad'
import locationLoad from '../location/locationLoad';

// This Webcam Component will be input into Elevator, Restaurant, Bus Stop, and Road Kiosk
// Webcam is currently hidden but can catch human faces
// hasPerson is the State that can be changed by FaceRekogCam Component
export default function PeopleCapture({hasPerson}){
    const webcam = useRef(null);

    const [targets, setTargets] = useState([])
    const [address, setAddress] = useState("")
    const [testing, isTesting] = useState(false)

    const config = new AWS.Config({
        accessKeyId: "AKIAV7NXXUK7R2XA2K2S",
        secretAccessKey: "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",
        region: "ap-southeast-2",
      }) // AWS 설정
    AWS.config = config
    const client = new AWS.Rekognition(); // 클라이언트 생성

    useEffect(() => {
        peopleLoad().then(data => setTargets(data))
        locationLoad().then(data => setAddress(data))
    }, [])

    if(hasPerson && !testing) {
        // 인물 비교 중에는 testing이 true가 되어 중복 실행 방지
        if(targets.length !== 0 && address !== "") {
          isTesting(true)
          console.log("This should be loaded at once...") // Warning Sign
          compareFaces(client, webcam, targets, address, isTesting) // Async Function
        } else {
          console.log("잠시만 기다려주십시오")
        }
    }

    return (
        <div>
          <Webcam style={{ visibility: "hidden" }} audio={false} screenshotFormat="image/jpeg" ref={webcam} />
        </div>
    )
}