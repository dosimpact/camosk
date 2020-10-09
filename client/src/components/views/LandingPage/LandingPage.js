import React, { useEffect, useState } from "react";
// import useScript from "../../../hoc/useScript";
import { FaCode } from "react-icons/fa";
import * as faceapi from "face-api.js";

import Menu from "./Section/Menu";
import styled from "styled-components";

const LandingPage = () => {
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

    video.addEventListener("play", () => {
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
      video.removeEventListener("play");
    };
  }, []);
  return (
    <Wrapper>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <span style={{ fontSize: "2rem" }}>홈페이지 광고 Player</span>
        {error ? "Cam Device is not founded" : "loading..."}
        <video
          className="webcam"
          id="video"
          width="250"
          height="200"
          autoPlay
          muted
        ></video>
      </div>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div``;
