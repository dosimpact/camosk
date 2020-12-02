import React, { useState, useEffect } from "react";
import BusStopP from "./BusStopP";
/*
    매장 안의 키오스크를 구성한다.
*/
import { getRecommand } from "apis/reommand";

const BusStopC = () => {
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

  useEffect(() => {
    window.scrollTo(0, 70);
    return () => {};
  }, []);

  useEffect(() => {
    console.log("change hasPerson", hasPerson);
  }, [hasPerson]);

  return (
    <>
      <BusStopP
        handle_onTarget={handle_onTarget}
        hasPerson={hasPerson}
        setHasPerson={setHasPerson}
        urlTop={urlTop}
        urlBottom={urlBottom}
      />
    </>
  );
};

export default BusStopC;
