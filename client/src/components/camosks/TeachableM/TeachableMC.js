// import { TeachableMobileNet } from "@teachablemachine/image";
import React, { useState, useEffect, useRef } from "react";
import TeachableMP from "./TeachableMP";
// import * as tf from "@tensorflow/tfjs";
// import * as tmImage from "@teachablemachine/image";
// window.tf = tf;

const TeachableMC = () => {
  // More API functions here:
  // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

  // the link to your model provided by Teachable Machine export panel
  const [state, setState] = useState({
    model: null,
    maxPredictions: null,
  });
  const ImageRef = useRef();
  const URL = "https://teachablemachine.withgoogle.com/models/DPefErDrX/";

  async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    const model = await window.tmImage.load(modelURL, metadataURL);
    const maxPredictions = model.getTotalClasses();
    setState((prev) => ({ model, maxPredictions }));
  }

  // run the webcam image through the image model
  async function predict() {
    const { model } = state;
    console.log("predict");
    const prediction = await model.predict(ImageRef.current);
    console.log(prediction);
  }
  useEffect(() => {
    init();
    return () => {};
  }, []);
  return <TeachableMP ImageRef={ImageRef} predict={predict} />;
};

export default TeachableMC;
