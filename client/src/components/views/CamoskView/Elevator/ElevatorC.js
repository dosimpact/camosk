import React, { useEffect, useState } from "react";
import { getRecommand } from "apis/reommand";

import ElevatorP from "./ElevatorP";
/*
    매장 안의 키오스크를 구성한다.


    1. 단계, FaceRekogCam 에서, 사람이 있는지 없는지 판단.
    2. 단계, FaceInfoCam 에서 , AWS API 를 통해서 사용자의 익명정보를 얻어옴
    2. 단계, ? 에서 , AWS API 를 통해서 사용자의 이름을 얻어옴 ( DB에 있는 사용자만 가능 )
*/
const ElevatorC = () => {
  // 얼굴 피드 캠에서 사람이 있는지 없는지 판단
  const [hasPerson, setHasPerson] = useState(false);

  // 위 광고 ,아래 광고 URL
  const [urlTop, setUrlTop] = useState(null);
  const [urlBottom, setUrlBottom] = useState(null);

  // dev mode : Top 네비게이션 안보이게 스크롤 살짝 내려주기
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      window.scrollTo(0, 70);
    }
    return () => {};
  }, []);

  // 사람이 보일때, 로직  > 광고 가져오기, 얼굴 비교하기
  useEffect(() => {
    console.log("사람이 변화가 감지 되었습니다. change hasPerson", hasPerson);
    // console.log("hasPerson 변화 > FaceInfoCam 익명정보 얻어오기");
    // console.log("hasPerson 변화 > FaceInfoCam 얼굴비교 정보 얻어오기");
    return () => {};
  }, [hasPerson]);

  // 얼굴 인식한 결과, 얼굴의 target 을 통해 영상 정보를 얻어온다.
  const handle_onTarget = async (target) => {
    const { data: data1 } = await getRecommand(target);
    const { data: data2 } = await getRecommand(target);
    setUrlTop(data1?.url);
    setUrlBottom(data2?.url);
  };

  return (
    <>
      <ElevatorP
        hasPerson={hasPerson}
        setHasPerson={setHasPerson}
        handle_onTarget={handle_onTarget}
        urlTop={urlTop}
        urlBottom={urlBottom}
      />
    </>
  );
};

export default ElevatorC;
