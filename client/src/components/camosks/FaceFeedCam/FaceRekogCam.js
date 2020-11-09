import React, { useEffect, useState, useRef } from "react";
import * as faceapi from "face-api.js";
import styled from "styled-components";

// setHasPerson 사람이 있는지 없는지 > 있으면 , AWS API 호출하게끔

function FaceRekogCam({setHasPerson}) {

  const [counter,setCounter] = useState(0);
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
          console.log(detections);
          if(detections.length){
              setCounter( prev => {
                  if(prev >= 2){
                      setHasPerson(true);
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
  }, []);


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