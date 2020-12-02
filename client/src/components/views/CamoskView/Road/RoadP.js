import React, { useEffect } from "react";
import styled from "styled-components";
import Order from "components/camosks/Order";

// import ClockC from "components/camosks/Clock/ClockC"
// import NewsC from "components/camosks/News/NewsC"
// import WeatherC from "components/camosks/Weather/WeatherC"
// import QRCodeC from "components/camosks/QRCode/QRCodeC"
import AdvertisePanel from "components/camosks/SampleAds/CustomAds";
import FaceRekogCam from "components/camosks/FaceFeedCam/v2/FaceRekogCam";
import FaceInfoCam from "components/camosks/FaceInfoCam/FaceInfoCam";
import QRCode from "components/camosks/QRCode/QRCodeP";

// import PeopleCapture from "../../../camosks/People/PeopleCapture";
import CriminalCapture from "../../../camosks/Criminal/CriminalCapture";
/*
    매장 안의 키오스크를 구성한다.
*/

import ClockC from "components/camosks/Clock/ClockC";
import WeatherC from "components/camosks/Weather/WeatherC";

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

const RoadP = ({
  hasPerson,
  setHasPerson,
  handle_onTarget,
  urlTop,
  urlBottom,
}) => {
  useEffect(() => {
    window.scrollTo(0, 70);
    return () => {};
  }, []);

  return (
    <Wrapper>
      <Container>
        <div className="area1">
          <AdPart hasPerson={hasPerson} url={urlBottom} />
        </div>
        <div className="area2">
          <FaceRekogCam className="FaceRekogCam" onChange={setHasPerson} />
        </div>
        <div className="area3">
          <ClockC />
          <WeatherC />
        </div>

        <div className="area4">
          <AdPart hasPerson={hasPerson} url={urlTop} />
        </div>
        <div className="area5">
          <AdPart hasPerson={hasPerson} url={urlBottom} />
        </div>
        <div className="area6">
          <AdPart hasPerson={hasPerson} url={urlTop} />
        </div>

        <div className="area7">
          <FaceRekogCam className="FaceRekogCam" onChange={setHasPerson} />
        </div>
        <div className="area8">
          <AdPart hasPerson={hasPerson} url={urlBottom} />
        </div>
        <div className="area9">
          <AdPart hasPerson={hasPerson} url={urlTop} />
        </div>

        <div className="area10">
          <QRCode
            className="QRCode"
            url="https://www.youtube.com/watch?v=HxhjperItvI"
          />
        </div>
        <div className="area11">
          <AdPart hasPerson={hasPerson} url={urlBottom} />
        </div>
      </Container>

      {/* invisible area */}
      <FaceInfoCam
        trigger={hasPerson}
        onChange={(target) => {
          console.log("FaceInfoCam target", target);
          handle_onTarget(target);
        }}
      />
      {<CriminalCapture hasPerson={hasPerson} />}
    </Wrapper>
  );
};

export default RoadP;

const Wrapper = styled.div`
  width: 100%;
  & .FaceRekogCam {
    height: 100%;
    width: 100%;
  }

  & .AdvertisePanel {
    height: 100%;
    width: 100%;
  }

  & .QRCode {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-auto-rows: 1fr 1fr 1fr; */
  grid-auto-rows: 305px;
  /* grid-template-areas: "" area1 area2 area3 "   " area4 area4 area6 "   " area4 area4 area7 "   " area8 area9 area9 ""; */

  & .area1 {
    grid-area: span 2 / span 2;
  }
  & .area2 {
  }
  & .area3 {
  }
  & .area4 {
  }
  & .area5 {
    grid-area: span 2 / span 1;
  }
  & .area6 {
  }
  & .area7 {
  }
  & .area8 {
  }
  & .area9 {
  }
  & .area10 {
  }
  & .area11 {
  }
  & .area12 {
  }
`;
