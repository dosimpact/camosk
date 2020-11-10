import React, { useEffect, useState, useRef } from "react";
import * as faceapi from "face-api.js";
import styled from "styled-components";

import peopleCompare from "../../../people/peopleCompare"
import peopleLoad from "../../../people/peopleLoad"
import locationLoad from "../../../location/locationLoad";

function FaceRekogCam({setHasPerson, webcam, setFlash}) {
  const [testing, isTesting] = useState(false) // 안면 비교 수행 중인지 나타내는 상태
  const [fetched, isFetched] = useState(false) // 사람들 목록 내려받았는지 나타내는 상태 (불리언)
  const [targets, setTargets] = useState([]) // 사람들의 목록
  const [address, setAddress] = useState("") // 주소 목록

  const [counter,setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    peopleLoad().then(response => {
      setTargets(response)
      console.log(targets)
      locationLoad().then(addr => {
        setAddress(addr)
        isFetched(true)
      })
    }).catch(err => {
      console.error(err);
      alert("정보를 불러오는데 오류가 생겼습니다!")
      isFetched(true)
    })
  }, [targets])
  // peopleLoad 함수로 실종인물의 목록을 받으면 setTargets로 target 상태 업데이트
  // 이후 locationLoad 함수로 address 상태 업데이트
  // 전부 업데이트에 성공하면 fetched 값 true로 변경

  // useScript(`${process.env.PUBLIC_URL}/face-api.min.js`);
  useEffect(() => {
    const video = document.getElementById("video");

    const startVideo = async () => {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
      } catch (err) {
        setError(true);
        console.error(err);
      }
      // navigator.mediaDevices.getUserMedia(
      // { video: {} },
      // (stream) => (video.srcObject = stream),
      // (err) => console.error(err)
      // );
    };
    const MODELS_URL = `${process.env.PUBLIC_URL}/models`;
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODELS_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODELS_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODELS_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODELS_URL),
    ]).then(startVideo);

    setLoading(false);

    const handlePlay =  video.addEventListener("play", () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      canvas.classList.add("faceCanvas");
      document.body.append(canvas);
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
          if(detections.length){
              console.log(detections);
              setCounter( prev => {
                  if(prev >= 2){ // 분명 prev가 2가 넘어가면 == 3번 연속 얼굴이 찍히면
                      setHasPerson(true); /// hasPerson 함수는 참이 됨
                      if(!testing && fetched) { // 안면 비교 수행 중이지 않고 동시에 상태가 전부 업데이트 되었다면
                        const based = webcam.current.getScreenshot(); // 웹 캠 스크린 샷
                        const buf = Buffer.from(based.replace("data:image/jpeg;base64,", ""), "base64") // 버퍼 형태로 변경
                        console.log(address)
                        peopleCompare(targets, buf, isTesting, setFlash, address)
                        // 인물 목록, 스크린샷 버퍼, testing 상태 setState, 플래시 메시지 setState, 주소를 매개변수로
                      }
                  }
                  return prev+1
              });
          }else{
              setCounter(0);
              setHasPerson(false);
          }
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 500);
    });

    return () => {
      video.removeEventListener("play",handlePlay);
    };
  }, [address, fetched, setFlash, setHasPerson, targets, testing, webcam]);


    return (
        <>
            {loading ? "loading..." : `${error ? "Cam Device is not founded" : ""}`}
            <video
            className="webcam"
            id="video"
            width="250"
            height="200"
            autoPlay
            muted
            ></video>
        </>
    )
}

export default FaceRekogCam
