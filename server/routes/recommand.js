import express from "express";
import { getVideoV } from "../service/recommand/recommand"
const router = express.Router();

//=================================
//             recommand
//=================================

router.post("/", (req, res) => {
  const {
    AgeRange00,
    AgeRange10,
    AgeRange20,
    AgeRange30,
    AgeRange40,
    AgeRange50,
    AgeRange60,
    AgeRange70,
    AgeRange80,
    Male,
    Female,
    Eyeglasses,
    Mustache,
    Smile,
    Sunglasses,
    ANGRY,
    HAPPY,
    SAD,
    CALM,
  } = req.body;
  console.log(req.body);
  let v = "yj9Nkpm61UM";

  if (Number(AgeRange00) >= 1) {
    v = "hc9CPpfQzWQ";
  }
  if (Number(AgeRange10) >= 1) {
    v = "q7w7H3UMrwQ";
  }
  if (Number(AgeRange20) >= 1) {
    v = "yj9Nkpm61UM";
  }
  if (Number(AgeRange30) >= 1) {
    v = "ao5HHZg3QMk";
  }
  if (Number(AgeRange40) >= 1) {
    v = "Py-BAqWV144";
  }
  if (Number(AgeRange50) >= 1) {
    v = "3-lwEiQ_o2c";
  }
  if (Number(AgeRange60) >= 1) {
    v = "Yvr46lJcIeU";
  }
  if (Number(AgeRange70) >= 1) {
    v = "KFiXvoOVbfQ";
  }
  if (Number(AgeRange80) >= 1) {
    v = "BRPC-nvf8T4";
  }
  if (Number(Male) >= 1) {
    v = "6nxz-x4VsAU";
  }
  if (Number(Female) >= 1) {
    v = "nfNb29zEvbI";
  }
  if (Number(Eyeglasses) >= 1) {
    v = "tEZNK8zBAEk";
  }
  if (Number(Mustache) >= 1) {
    v = "HYozI_eLAV4";
  }
  if (Number(Smile) >= 1) {
    v = "rRDGx05fRzc";
  }
  if (Number(Sunglasses) >= 1) {
    v = "kgyqdC_nHMQ";
  }
  if (Number(ANGRY) >= 1) {
    v = "9NQyBg6nqbk";
  }
  if (Number(HAPPY) >= 1) {
    v = "7_HYO6IaiEY";
  }
  if (Number(SAD) >= 1) {
    v = "RE1q3-mRLoA";
  }
  if (Number(CALM) >= 1) {
    v = "1H7vnXa-Fog";
  }

  const YOUTUBE_URL = `https://www.youtube.com/watch?v=${v}`;
  res.status(200).json({
    sucess: true,
    v,
    url: YOUTUBE_URL,
  });
});

router.post("/v2/", (req, res) => {
  const {
    AgeRange00,
    AgeRange10,
    AgeRange20,
    AgeRange30,
    AgeRange40,
    AgeRange50,
    AgeRange60,
    AgeRange70,
    AgeRange80,
    Male,
    Female,
    Eyeglasses,
    Mustache,
    Smile,
    Sunglasses,
    ANGRY,
    HAPPY,
    SAD,
    CALM,
  } = req.body;

  let v = "3MSPHzlRXQQ";
  let key = null;

  try {
    const { key, v } = getVideoV(req.body);
    const YOUTUBE_URL = `https://www.youtube.com/watch?v=${v}`;
    return res.status(200).json({
      sucess: true,
      v,
      url: YOUTUBE_URL, key
    });

  } catch (error) {
    console.log(error);
    const YOUTUBE_URL = `https://www.youtube.com/watch?v=${v}`;
    return res.status(400).json({
      sucess: false,
      v,
      url: YOUTUBE_URL,
    });
  }
});

module.exports = router;
