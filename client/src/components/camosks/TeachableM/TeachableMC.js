import React, { useState, useEffect, useRef } from "react";
import TeachableMP from "./TeachableMP";

// import * as tmImage from "@teachablemachine/image";
// import * as tf from "@tensorflow/tfjs";
// window.tmImage = tmImage;
// window.tf = tf;

// model URL
// predict
// onChange
const TeachableMC = ({ model_URL, ImageSRC, trigger, onChange }) => {
  // More API functions here:
  // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

  // the link to your model provided by Teachable Machine export panel
  const [state, setState] = useState({
    model: null,
    maxPredictions: null,
  });
  const ImageRef = useRef();
  const URL = model_URL; //"https://teachablemachine.withgoogle.com/models/DPefErDrX/";

  async function init() {
    await (function () {
      return new Promise((res, _) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
    })(); // 1초 후 스크린샷 및 얼굴 감지 시작, async await 그리고 IIFE 활용

    try {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      const model = await window.tmImage.load(modelURL, metadataURL);
      const maxPredictions = model.getTotalClasses();
      setState((prev) => ({ model, maxPredictions }));
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    // run the webcam image through the image model
    async function predict() {
      try {
        const { model } = state;
        console.log("predict");
        const prediction = await model.predict(ImageRef.current);
        console.log(prediction);
        if (onChange) {
          onChange(prediction);
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    if (trigger) {
      predict();
    }
    return () => {};
  }, [trigger, onChange, state]);
  return (
    <>
      {/* <Helmet>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"
        ></script>
      </Helmet> */}
      <TeachableMP ImageRef={ImageRef} ImageSRC={ImageSRC} />;
    </>
  );
};

export default TeachableMC;
