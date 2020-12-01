import React, { useState, useEffect, useRef } from "react";
import AWS from "aws-sdk";
import Webcam from "react-webcam";

import criminalLoad from "./CriminalLoad";
import locationLoad from "../Location/LocationLoad";
import criminalCompare from "./CriminalCompare";

//peopleCapture 컴포넌트와 비슷한데 import 하는 함수가 다름
//범죄자와 실종인물이 가지고 있는 정보가 다르기 때문
export default function PeopleCapture({ hasPerson, onChange }) {
  const webcam = useRef(null);

  const [targets, setTargets] = useState([]);
  const [address, setAddress] = useState("");
  const [testing, isTesting] = useState(false);

  const config = new AWS.Config({
    accessKeyId: "AKIAV7NXXUK7R2XA2K2S",
    secretAccessKey: "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",
    region: "ap-southeast-2",
  }); // AWS 설정
  AWS.config = config;
  const client = new AWS.Rekognition(); // 클라이언트 생성

  useEffect(() => {
    criminalLoad().then((data) => setTargets(data));
    locationLoad().then((data) => setAddress(data));
  }, []);

  useEffect(() => {
    if (hasPerson && !testing) {
      // 인물 비교 중에는 testing이 true가 되어 중복 실행 방지
      if (targets.length !== 0 && address !== "") {
        isTesting(true);
        console.log("This should be loaded at once..."); // Warning Sign
        criminalCompare(client, webcam, targets, address, isTesting, onChange); // Async Function
      } else {
        console.log("잠시만 기다려주십시오");
      }
    }
    return () => {};
  }, [hasPerson]);

  return (
    <div>
      <Webcam
        style={{ visibility: "hidden" }}
        audio={false}
        screenshotFormat="image/jpeg"
        ref={webcam}
      />
    </div>
  );
}
