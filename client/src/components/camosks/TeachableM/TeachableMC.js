import React, { useState, useEffect, useRef } from "react";
import TeachableMP from "./TeachableMP";

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
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    const model = await window.tmImage.load(modelURL, metadataURL);
    const maxPredictions = model.getTotalClasses();
    setState((prev) => ({ model, maxPredictions }));
  }

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    // run the webcam image through the image model
    async function predict() {
      const { model } = state;
      console.log("predict");
      const prediction = await model.predict(ImageRef.current);
      console.log(prediction);
      if (onChange) {
        onChange(prediction);
      }
    }
    if (trigger) {
      predict();
    }
    return () => {};
  }, [trigger, onChange, state]);
  return <TeachableMP ImageRef={ImageRef} ImageSRC={ImageSRC} />;
};

export default TeachableMC;
