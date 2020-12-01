import React, { useState } from "react";
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

  const [name, setName] = useState(null);
  const handle_setPersonName = (name) => {
    if (name === "김도영") {
      setName("kimdoyoung");
    }
    if (name === "이노원") {
      setName("leenoone");
    }
  };

  return (
    <>
      <RestaurantP
        handle_onTarget={handle_onTarget}
        hasPerson={hasPerson}
        setHasPerson={setHasPerson}
        urlTop={urlTop}
        urlBottom={urlBottom}
        name={name}
        handle_setPersonName={handle_setPersonName}
      />
    </>
  );
};

export default RestaurantC;
