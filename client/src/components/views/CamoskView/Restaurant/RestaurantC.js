import React, { useEffect, useState } from "react";
import RestaurantP from "./RestaurantP";
/*
    매장 안의 키오스크를 구성한다.
*/
const RestaurantC = () => {
  // 얼굴 피드 캠에서 사람이 있는지 없는지 판단
  const [hasPerson, setHasPerson] = useState(false);

  // dev mode : Top 네비게이션 안보이게 스크롤 살짝 내려주기
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      window.scrollTo(0, 70);
    }
    return () => {};
  }, []);

  // 사람이 보일때, 로직  > 광고 가져오기, 얼굴 비교하기
  useEffect(() => {
    console.log(
      "[ElevatorC] 사람이 변화가 감지 되었습니다. change hasPerson",
      hasPerson
    );
    return () => {};
  }, [hasPerson]);

  // 얼굴 인식한 결과, 얼굴의 target 을 통해 영상 정보를 얻어온다.
  const handle_onTarget = async (target) => {};

  return (
    <>
      <RestaurantP />
    </>
  );
};

export default RestaurantC;
