import React, { useEffect, useState, useRef } from "react";
// import useScript from "../../../hoc/useScript";
import { FaCode } from "react-icons/fa";
import * as faceapi from "face-api.js";


import Webcam from "react-webcam";
import ReactPlayer from "react-player";
import AWS from 'aws-sdk'
import { detectFace } from "../../rekognition/detect"

import Menu from "./Section/Menu";
import styled from "styled-components";


const LandingPage = () => {

  const webcam = useRef(null); // 웹캠 DOM
  const [ads, setAds] = useState(false) // 광고를 송출할지 말지 결정하는 state
  const [content, setContent] = useState(null) // 광고의 동영상, 시간 등을 담고 있는 state

  const config = new AWS.Config({
    accessKeyId: "AKIAV7NXXUK7UJDXHANP",
    secretAccessKey: "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",
    region: "ap-southeast-2",
  }) // AWS 설정
  AWS.config = config
  const client = new AWS.Rekognition(); // 클라이언트 생성


  async function doCapture() {
    await (function () {
      return new Promise((res, _) => {
        setTimeout(() => {
          res();
        }, 1000)
      })
    })(); // 3초 후 스크린샷 및 얼굴 감지 시작, async await 그리고 IIFE 활용

    const based = webcam.current.getScreenshot();
    if (!based) {
      console.log("cannot get jpg from webcam")
      return;
    }
    const buf = Buffer.from(based.replace("data:image/jpeg;base64,", ""), "base64") // 버퍼 형태로 변환
    detectFace(buf, client, setAds, setContent); // 감지 및 분석 시작. 매개변수로 setAds와 setContent를 넘겨서 state 변경토록 함
  }


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 100);
    });

    return () => {
      video.removeEventListener("play",handlePlay);
    };
  }, []);
  return (
    <Wrapper>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <span style={{ fontSize: "2rem" }}>홈페이지 광고 Player</span>
        {loading ? "loading..." : `${error ? "Cam Device is not founded" : ""}`}
        <video
          className="webcam"
          id="video"
          width="250"
          height="200"
          autoPlay
          muted
        ></video>

        {!ads ?
          <>
            <button onClick={() => { doCapture() }} className="action">Action</button>
          </> :
          <>
            <h1>Target Advertisement Launching...</h1>
            <p>{content}</p>
            {/* content에 동영상 주소가 들어감 */}
            <ReactPlayer  url={content} onEnded={() => { setAds(false) }} onPause={() => { setAds(false) }} width="720px" height="480px" muted={true} playing={true} />
            <button onClick={() => { setAds(false) }} className="action">Reset</button>
          </>
        }
      </div>
      <div>
        <Webcam style={{visibility:"hidden"}} audio={false} screenshotFormat="image/jpeg" ref={webcam} />
      </div>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div``;
