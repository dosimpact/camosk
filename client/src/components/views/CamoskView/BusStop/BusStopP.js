import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ClockC from "components/camosks/Clock/ClockC";
import NewsC from "components/camosks/News/NewsC";
import WeatherC from "components/camosks/Weather/WeatherC";
// import QRCodeC from "components/camosks/QRCode/QRCodeC"
// import SampleAds from "components/camosks/SampleAds/SampleAdsDummy";

import busWaitList from "components/camosks/Bus/BusWaitList";
import RedBellButton from "../../../camosks/RedBell/RedBellC";

import FaceRekogCam from "components/camosks/FaceFeedCam/v2/FaceRekogCam";
import FaceInfoCam from "components/camosks/FaceInfoCam/FaceInfoCam";
import CriminalCapture from "components/camosks/Criminal/CriminalCapture";
import AdvertisePanel from "components/camosks/SampleAds/CustomAds";

/*
    매장 안의 키오스크를 구성한다.
*/

const AdPart = ({ hasPerson, url }) => {
  return (
    <>
      {hasPerson && url ? (
        <AdvertisePanel
          className="AdvertisePanel"
          url={url ? url : "https://www.youtube.com/watch?v=zoGg0KPa4a0"}
        />
      ) : (
        <AdvertisePanel
          className="AdvertisePanel"
          url="https://www.youtube.com/watch?v=HxhjperItvI"
        />
      )}
    </>
  );
};

const BusStopP = ({
  hasPerson,
  setHasPerson,
  handle_onTarget,
  urlTop,
  urlBottom,
}) => {
  const [waitList, setWaitList] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 70);
    return () => {};
  }, []);
  useEffect(() => {
    busWaitList().then((resp) => setWaitList(resp));
    /*
        const busLoop = setInterval(() => {
            busWaitList().then(resp => setWaitList(resp))
        }, 3 * 60 * 1000)
        return () => clearInterval(busLoop)
        */
  }, []);
  return (
    <Wrapper>
      {/* 버스 정류장 P에 버스 도착 알리미 기능 부여 
            현재 위치 근처 정류장 탐지 기능 */}
      <RedBellButton
        className="RedBellButton"
        style={{ padding: "30px 0px" }}
      />
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 240px)",
          justifyContent: "center",
          rowGap: "30px",
          columnGap: "30px",
          padding: "20px 0px",
          fontSize: "24px",
        }}
      >
        {!waitList ? (
          <h1>{"준비중입니다"}</h1>
        ) : (
          waitList.map((el) => {
            return (
              <div className={"BusContainer"}>
                <h2 style={{ color: "white" }}>
                  <div
                    style={{
                      color: "white",
                      fontSize: "32px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    {el.busName}
                  </div>
                  <h5 style={{ color: "white" }}>
                    {"현재 위치 : "}
                    {el.location}
                    {"정거장 전"}
                  </h5>
                </h2>
                <h5 style={{ color: "white" }}>{el.time}</h5>
                <small style={{ color: "white" }}>
                  {el.flag === "PASS" ? "운행 중" : "운행 종료"}
                </small>
                <h5 style={{ color: "white" }}>종착지점: {el.destination}</h5>
              </div>
            );
          })
        )}
      </div>
      <Container>
        <AdPart hasPerson={hasPerson} url={urlBottom} />
        {/* <AdPart hasPerson={hasPerson} url={urlTop} /> */}
      </Container>

      <div className="first">
        <ClockC />
        <WeatherC />
      </div>

      <Container className="second">
        <NewsC />
      </Container>

      <FaceRekogCam className="FaceRekogCam" onChange={setHasPerson} />
      <FaceInfoCam
        trigger={hasPerson}
        onChange={(target) => {
          console.log("FaceInfoCam target", target);
          handle_onTarget(target);
        }}
      />
      {/* The Webcam Component PeopleCapture is attached */}
      {/*<PeopleCapture hasPerson={hasPerson}/>*/}
      {<CriminalCapture hasPerson={hasPerson} />}
      {/*우선 엘레베이터에 범죄자 찾기 기능 구현*/}
    </Wrapper>
  );
};

export default BusStopP;

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  color: whitesmoke;
  & .RedBellButton {
    width: 100%;
    height: 168px;
  }
  & .first {
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  & .second {
    margin-top: 50px;
  }

  & .FaceRekogCam {
    position: fixed;
    bottom: 0;
    right: 0;

    width: 250px;
    height: 200px;
  }

  & .AdvertisePanel {
    height: 500px;
  }
`;

const Container = styled.div``;
