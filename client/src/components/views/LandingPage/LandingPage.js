import React, { useEffect } from "react";
// import useScript from "../../../hoc/useScript";
import { FaCode } from "react-icons/fa";
import * as faceapi from "face-api.js";

const LandingPage = () => {
  // useScript(`${process.env.PUBLIC_URL}/face-api.min.js`);
  useEffect(() => {
    const video = document.getElementById("video");

    const startVideo = () => {
      navigator.getUserMedia(
        { video: {} },
        (stream) => (video.srcObject = stream),
        (err) => console.error(err)
      );
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
    <>
      <div className="app">
        <FaCode style={{ fontSize: "4rem" }} />
        <span style={{ fontSize: "2rem" }}>Movie Player</span>
        <video id="video" width="250" height="200" autoPlay muted></video>
      </div>
    </>
  );
};

export default LandingPage;
