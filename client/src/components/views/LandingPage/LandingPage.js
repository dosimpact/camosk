import React, { useEffect, useState, useRef } from "react";
// import useScript from "../../../hoc/useScript";
import { FaCode } from "react-icons/fa";
import * as faceapi from "face-api.js";


import Webcam from "react-webcam";
import ReactPlayer from "react-player";
import AWS from 'aws-sdk'
import { detectFace } from "../../rekognition/detect"

import Menu from "./Section/Menu";
import styled from "styled-components";

import FaceRekogCam from "./Section/FaceRekogCam"
import AdPage from "../AdPage/AdPage"
import Flash from "./Section/Flash"

import compareFaces from "../../compare/compareFace";
import peopleLoad from "../../camosks/People/PeopleLoad";
import locationLoad from "../../camosks/Location/LocationLoad"

// import QRCodeC from "../../QRCode/QRCodeC"


const LandingPage = () => {

  const webcam = useRef(null); // 웹캠 DOM
  const [ads, setAds] = useState(false) // 광고를 송출할지 말지 결정하는 state
  const [content, setContent] = useState(null) // 광고의 동영상, 시간 등을 담고 있는 state
  const [flash, setFlash] = useState(null)

  const [targets, setTargets] = useState([])
  const [address, setAddress] = useState("")

  const config = new AWS.Config({
    accessKeyId: "AKIAV7NXXUK7R2XA2K2S",
    secretAccessKey: "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",
    region: "ap-southeast-2",
  }) // AWS 설정
  AWS.config = config
  const client = new AWS.Rekognition(); // 클라이언트 생성

  useEffect(() => {
    peopleLoad().then(data => setTargets(data))
    locationLoad().then(data => setAddress(data))
  }, [])

  async function doCapture() {
    await (function () {
      return new Promise((res, _) => {
        setTimeout(() => {
          res();
        }, 1000)
      })
    })(); // 1초 후 스크린샷 및 얼굴 감지 시작, async await 그리고 IIFE 활용

    const based = webcam.current.getScreenshot();
    if (!based) {
      console.log("cannot get jpg from webcam")
      return;
    }
    const buf = Buffer.from(based.replace("data:image/jpeg;base64,", ""), "base64") // 버퍼 형태로 변환
    detectFace(buf, client, setAds, setContent); // 감지 및 분석 시작. 매개변수로 setAds와 setContent를 넘겨서 state 변경토록 함
  }

  // 사람이 존재하는지 유무 - 독립된 face 인식 피드백 캠임
  const [hasPerson, setHasPerson] = useState(false);
  const [testing, isTesting] = useState(false)

  if(hasPerson && !testing) {
    if(targets.length !== 0 && address !== "") {
      isTesting(true)
      console.log("This should be loaded at once...")
      compareFaces(client, webcam, targets, address, isTesting)
    } else {
      console.log("잠시만 기다려주십시오")
    }
  }
  //
  const [isShoping, setIsShoping] = useState(false);
  const AdVideo = useRef(null);
  const PurchasePage = useRef(null);

  const scrollToPurchase = () => {
    PurchasePage.current.scrollIntoView();
  }
  const UXMananger = () => {
    // console.log("UXMananger");
    if (hasPerson && !isShoping) {
      AdVideo.current.scrollIntoView();
      //doCapture();
    }
  }
  useEffect(() => {
    UXMananger();
  }, [UXMananger, hasPerson, isShoping])

  return (
    <>
      <AdPage setIsShoping={setIsShoping} PurchasePageRef={PurchasePage} />
      <Wrapper>
        <Flash flash={flash} />
        <FaceRekogCam setHasPerson={setHasPerson}/>
        <div className="app" ref={AdVideo}>

          <FaCode style={{ fontSize: "4rem" }} />
          <span style={{ fontSize: "2rem" }}>홈페이지 광고 Player</span>
          {/* {loading ? "loading..." : `${error ? "Cam Device is not founded" : ""}`}
        <video
          className="webcam"
          id="video"
          width="250"
          height="200"
          autoPlay
          muted
        ></video> */}

          {!ads ?
            <>
              {/*<button onClick={() => { doCapture() }} className="action">Action</button>*/}
              {"Camera is ready..."}
            </> :
            <>
              <h1>Target Advertisement Launching...</h1>
              <p>{content}</p>
              {/* <QRCodeC url={content} /> */}
              {/* content에 동영상 주소가 들어감 */}
              <ReactPlayer
                url={content}
                onEnded={() => { setAds(false); setIsShoping(true); scrollToPurchase(); }}
                onPause={() => { setAds(false); setIsShoping(true); scrollToPurchase(); }}
                width="720px"
                height="480px"
                muted={true}
                playing={true} />
              <button onClick={() => { setAds(false); setIsShoping(true) }} className="action">Reset</button>
            </>
          }
        </div>
        <div>
          <Webcam style={{ visibility: "hidden" }} audio={false} screenshotFormat="image/jpeg" ref={webcam} />
        </div>
        {
          JSON.stringify({ hasPerson, isShoping }, null, 2)
        }
      </Wrapper>
    </>
  );
};

export default LandingPage;

const Wrapper = styled.div``;
