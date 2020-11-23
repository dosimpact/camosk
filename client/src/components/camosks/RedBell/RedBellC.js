import React, { useState } from "react";
import LocationLoad from "components/camosks/Location/LocationLoad";
import { ADMIN_PH } from "apis/config";
import { SMS } from "apis/notification";

import RedBellP from "./RedBellP";

// 현재시간을 가져와서, 14:00 , 12월 31일 등으로 표시하기
// moment .js 사용
const RedBellC = (props) => {
  const [count, setCount] = useState(0);
  const PushNotification = async () => {
    const location = await LocationLoad();
    console.log("location", location);
    await SMS(`${location} 비상벨 신고 들어옴, 즉시 출동 바람`, ADMIN_PH);
  };
  const handleCount = (e) => {
    setCount((prev) => prev + 1);
    if (count >= 2) {
      console.log("비상벨 신고됨");
      PushNotification();
    }
  };
  return (
    <>
      <RedBellP {...props} count={count} handleCount={handleCount} />
    </>
  );
};

export default RedBellC;
