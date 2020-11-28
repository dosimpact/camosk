let model, maxPredictions;

export const init = async () => {
  const URL = "https://teachablemachine.withgoogle.com/models/I7ddZSkp2/";
  try {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await global.tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    predict();
  } catch (error) {
    console.log("error", error);
  }
};

export const predict = async () => {
  try {
    console.log("predict");
    const imgEl = document.createElement("img");
    imgEl.src = `https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/bts_un_2020_speech_v.jpg`;
    const prediction = await model.predict(imgEl);
    console.log(prediction);
  } catch (error) {
    console.log("error", error);
  }
};
