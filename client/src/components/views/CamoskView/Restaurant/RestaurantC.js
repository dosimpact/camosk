import React, { useState, useEffect } from "react";
import RestaurantP from "./RestaurantP";
import { getRecommand } from "apis/reommand";

/*
    매장 안의 키오스크를 구성한다.
*/
const RestaurantC = () => {
  const [hasPerson, setHasPerson] = useState(false);

  const [urlTop, setUrlTop] = useState(null);
  const [urlBottom, setUrlBottom] = useState(null);

  const handle_onTarget = async (target) => {
    const { data: data1 } = await getRecommand(target);
    const { data: data2 } = await getRecommand(target);
    console.log(data1);
    console.log(data2);
    setUrlTop(data1?.url);
    setUrlBottom(data2?.url);
  };

  const [personInfo, setPersonInfo] = useState({
    address: "대한민국 경기도 용인시 수지구 동천동 13",
    cause: "불명",
    id: "101",
    name: "김도영",
    term: "2020-07-01~2020-12-31",
  });
  const [nameEN, setName] = useState(null);

  const handle_setPersonName = (name, e) => {
    setPersonInfo(e);
    if (name === "김도영") {
      setName("kimdoyoung");
    }
    if (name === "이노원") {
      setName("leenoone");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 70);
    return () => {};
  }, []);

  useEffect(() => {
    console.log("change hasPerson", hasPerson);
  }, [hasPerson]);

  return (
    <>
      <RestaurantP
        handle_onTarget={handle_onTarget}
        hasPerson={hasPerson}
        setHasPerson={setHasPerson}
        urlTop={urlTop}
        urlBottom={urlBottom}
        nameEN={nameEN}
        personInfo={personInfo}
        handle_setPersonName={handle_setPersonName}
      />
    </>
  );
};

export default RestaurantC;
