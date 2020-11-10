import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Order from "components/camosks/Order"

import ClockC from "components/camosks/Clock/ClockC"
import NewsC from "components/camosks/News/NewsC"
import WeatherC from "components/camosks/Weather/WeatherC"
import QRCodeC from "components/camosks/QRCode/QRCodeC"
import AdvertisePanel from "components/camosks/SampleAds/SampleAdsDummy";

// import PlayAdsTop from "components/camosks/SampleAds/PlayAdsTop";
// import PlayAdsBottom from "components/camosks/SampleAds/PlayAdsBottom";
import FaceRekogCam from "components/camosks/FaceFeedCam/FaceRekogCam"
import FaceInfoCam from "components/camosks/FaceInfoCam/FaceInfoCam"

/*
    매장 안의 키오스크를 구성한다.

    사람이 있을때, 얼굴인식 > 결과 
    사람이 없을때, 방금 보여준 광고 유지...
    
    0000111110000000011111
    0000111111111111122222
*/
const ElevatorP = ({
    hasPerson,
    setHasPerson,
    handleChangeTrigger
}) => {



    return (
        <Wrapper>
            <button onClick={() => { handleChangeTrigger() }}>GET INFO</button>

            <div className="first">
                <ClockC />
                <WeatherC />
            </div>

            <Container className="second">
                <NewsC />
            </Container>

            <Container>
                {!hasPerson ?
                    <>
                        {/* 사람이 없는 경우 */}
                        <AdvertisePanel url="https://www.youtube.com/watch?v=HxhjperItvI" />
                        <AdvertisePanel />
                    </> :
                    <>
                        {/* 사람이 있는경우 */}
                        <AdvertisePanel url="https://www.youtube.com/watch?v=zoGg0KPa4a0" />
                        <AdvertisePanel url="https://www.youtube.com/watch?v=lJCpnTcQjbA" />
                    </>
                }
            </Container>
            <FaceRekogCam setHasPerson={setHasPerson} />
            <FaceInfoCam trigger={hasPerson} />
        </Wrapper>
    )
}

export default ElevatorP

const Wrapper = styled.div`
  width:100%;
  background-color:black;
  color:whitesmoke;
  & .first{    
    padding-top:50px;
    display:grid;
    grid-template-columns:1fr 1fr;
  }

  & .second{
    margin-top: 50px;
  }
`;

const Container = styled.div`


`;