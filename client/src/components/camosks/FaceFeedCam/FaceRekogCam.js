import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const PERSON_DISAPPER_INTERVAL = 6;
// onChange - 사람이 있냐 없냐 true, flase로 리턴함.
function FaceRekogCam({ onChange }) {
  const [, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = document.getElementById("FaceRekogCamVideo");
    const startVideo = async () => {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
      } catch (err) {
        setError(true);
        console.error(err);
      }
    };
    const MODELS_URL = `${process.env.PUBLIC_URL}/models`;
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODELS_URL),
      faceapi.nets.faceLandmark68Net.loadFromUri(MODELS_URL),
      faceapi.nets.faceRecognitionNet.loadFromUri(MODELS_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODELS_URL),
    ]).then(startVideo);

    setLoading(false);

    const handlePlay = video.addEventListener("play", () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      // canvas.classList.add("FaceRekogCam");
      canvas.id = "FaceRekogCamCanvas";
      document.body.append(canvas);
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions();
        // console.log(detections)
        if (detections.length) {
          // 얼굴인식 2초뒤에 반응
          setCounter((prev) => {
            if (prev >= PERSON_DISAPPER_INTERVAL) {
              // setHasPerson(true);
              onChange(true);
              return prev;
            } else {
              return prev + 1;
            }
          });
        } else {
          setCounter((prev) => {
            if (prev > 0) {
              return prev - 1;
            } else if (prev <= 0) {
              // setHasPerson(false);
              onChange(false);
              return prev;
            }
          });
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
      video.removeEventListener("play", handlePlay);
      document.body.removeChild(document.querySelector("#FaceRekogCamCanvas"));
    };
  }, []);

  return (
    <>
      {loading ? "loading..." : `${error ? "Cam Device is not founded" : ""}`}
      <video
        className="webcam"
        id="FaceRekogCamVideo"
        width="250"
        height="200"
        autoPlay
        muted
      ></video>
    </>
  );
}

export default FaceRekogCam;
