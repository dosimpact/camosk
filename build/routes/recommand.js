"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router(); //=================================
//             recommand
//=================================


router.post("/", function (req, res) {
  var _req$body = req.body,
      AgeRange00 = _req$body.AgeRange00,
      AgeRange10 = _req$body.AgeRange10,
      AgeRange20 = _req$body.AgeRange20,
      AgeRange30 = _req$body.AgeRange30,
      AgeRange40 = _req$body.AgeRange40,
      AgeRange50 = _req$body.AgeRange50,
      AgeRange60 = _req$body.AgeRange60,
      AgeRange70 = _req$body.AgeRange70,
      AgeRange80 = _req$body.AgeRange80,
      Male = _req$body.Male,
      Female = _req$body.Female,
      Eyeglasses = _req$body.Eyeglasses,
      Mustache = _req$body.Mustache,
      Smile = _req$body.Smile,
      Sunglasses = _req$body.Sunglasses,
      ANGRY = _req$body.ANGRY,
      HAPPY = _req$body.HAPPY,
      SAD = _req$body.SAD,
      CALM = _req$body.CALM;
  console.log(req.body);
  var v = "yj9Nkpm61UM";

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

  var YOUTUBE_URL = "https://www.youtube.com/watch?v=".concat(v);
  res.status(200).json({
    sucess: true,
    v: v,
    url: YOUTUBE_URL
  });
});
module.exports = router;