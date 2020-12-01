import React, { useEffect } from "react";
import styled from "styled-components";
import Order from "components/camosks/Order";

// import ClockC from "components/camosks/Clock/ClockC"
// import NewsC from "components/camosks/News/NewsC"
// import WeatherC from "components/camosks/Weather/WeatherC"
// import QRCodeC from "components/camosks/QRCode/QRCodeC"
import AdvertisePanel from "components/camosks/SampleAds/SampleAdsDummy";
import FaceRekogCam from "components/camosks/FaceFeedCam/FaceRekogCam";
import FaceInfoCam from "components/camosks/FaceInfoCam/FaceInfoCam";

// import PeopleCapture from "../../../camosks/People/PeopleCapture";
import CriminalCapture from "../../../camosks/Criminal/CriminalCapture";
/*
    매장 안의 키오스크를 구성한다.
*/
const RestaurantP = ({
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
        <Order />
      </Container>
      <Container>
        {hasPerson && urlTop && urlBottom ? (
          <>
            {/* 사람이 있는경우 */}
            <AdvertisePanel
              url={
                urlTop ? urlTop : "https://www.youtube.com/watch?v=zoGg0KPa4a0"
              }
            />
          </>
        ) : (
          <>
            {/* 사람이 없는 경우 */}
            <AdvertisePanel url="https://www.youtube.com/watch?v=HxhjperItvI" />
          </>
        )}
      </Container>
      <FaceRekogCam setHasPerson={setHasPerson} />
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

export default RestaurantP;

const Wrapper = styled.div`
  width: 100%;
  /* background-color:black; */
  /* color:whitesmoke; */
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
