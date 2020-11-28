import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { detectFace } from "components/camosks/FaceInfoCam/rekognition/detect";
import AWS from "aws-sdk";

/**
 * trigger 변동시+참일때 > 얼굴을 인식함,
 * onChange에 얼굴 인식결과 target 출력
 */

const FaceInfoCam = ({ className, trigger, onChange }) => {
  const webcam = useRef(null); // 웹캠 DOM
  // const [ads, setAds] = useState(false) // 광고를 송출할지 말지 결정하는 state
  // const [content, setContent] = useState(null) // 광고의 동영상, 시간 등을 담고 있는 state

  const config = new AWS.Config({
    accessKeyId: "AKIAV7NXXUK7R2XA2K2S",
    secretAccessKey: "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",
    region: "ap-southeast-2",
  }); // AWS 설정
  AWS.config = config;
  const client = new AWS.Rekognition(); // 클라이언트 생성

  useEffect(() => {
    async function doCapture() {
      await (function () {
        return new Promise((res, _) => {
          setTimeout(() => {
            res();
          }, 1000);
        });
      })(); // 1초 후 스크린샷 및 얼굴 감지 시작, async await 그리고 IIFE 활용

      const based = webcam.current.getScreenshot();
      if (!based) {
        console.log("cannot get jpg from webcam");
        return;
      }
      const buf = Buffer.from(
        based.replace("data:image/jpeg;base64,", ""),
        "base64"
      ); // 버퍼 형태로 변환
      detectFace(buf, client, onChange); // 감지 및 분석 시작. 매개변수로 setAds와 setContent를 넘겨서 state 변경토록 함
    }
    // console.log(ads, content);
    if (trigger) {
      doCapture();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <>
      <Webcam
        className={className}
        style={{ visibility: "hidden" }}
        audio={false}
        screenshotFormat="image/jpeg"
        ref={webcam}
      />
    </>
  );
};

export default FaceInfoCam;
