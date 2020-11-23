import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ClockC from "components/camosks/Clock/ClockC";
import NewsC from "components/camosks/News/NewsC";
import WeatherC from "components/camosks/Weather/WeatherC";
// import QRCodeC from "components/camosks/QRCode/QRCodeC"
import SampleAds from "components/camosks/SampleAds/SampleAdsDummy";

import busWaitList from "components/camosks/Bus/BusWaitList";

/*
    매장 안의 키오스크를 구성한다.
*/
const BusStopP = () => {
  const [waitList, setWaitList] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 70);
    return () => {};
  }, []);
  useEffect(() => {
    busWaitList().then((resp) => setWaitList(resp));
  }, []);
  return (
    <Wrapper>
      <div className="first">
        <ClockC />
        <WeatherC />
      </div>

      <Container className="second">
        <NewsC />
      </Container>

      <Container>
        <SampleAds />
      </Container>
      {/* 버스 정류장 P에 버스 도착 알리미 기능 부여 
            현재 위치 근처 정류장 탐지 기능 */}
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        {!waitList ? (
          <h1>{"준비중입니다"}</h1>
        ) : (
          waitList.map((el) => {
            return (
              <div style={{ backgroundColor: "white" }}>
                <h3>{el.busName}</h3>
                <small style={{ color: "black" }}>
                  {el.flag === "PASS" ? "운행 중" : "운행 종료"}
                </small>
                <h5>{el.destination}</h5>
                <h5>{el.time}</h5>
                <h5>{el.location}</h5>
              </div>
            );
          })
        )}
      </div>
    </Wrapper>
  );
};

export default BusStopP;

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  color: whitesmoke;
  & .first {
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  & .second {
    margin-top: 50px;
  }
`;

const Container = styled.div``;
