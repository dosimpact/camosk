import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Order from "components/camosks/Order"

import ClockC from "components/camosks/Clock/ClockC"
import NewsC from "components/camosks/News/NewsC"
import WeatherC from "components/camosks/Weather/WeatherC"
import QRCodeC from "components/camosks/QRCode/QRCodeC"
import SampleAds from "components/camosks/SampleAds/SampleAdsDummy";

import PlayAdsTop from "components/camosks/SampleAds/PlayAdsTop";
import PlayAdsBottom from "components/camosks/SampleAds/PlayAdsBottom";
import FaceRekogCam from "components/camosks/FaceFeedCam/FaceRekogCam"

/*
    매장 안의 키오스크를 구성한다.
*/
const ElevatorP = () => {

    // 얼굴 피드 캠에서 사람이 있는지 없는지 판단
    const [hasPerson, setHasPerson] = useState(null);

    // 디폴트 광고 인지 - 처음에 사람이 아무도 없을때 보여주는 광고
    const [urlTop, setUrlTop] = useState(null);
    const [urlBottom, setUrlBottom] = useState(null);


    // dev mode : 네비게이션 안보이게 설정
    useEffect(() => {
        window.scrollTo(0, 70);
        return () => {
        }
    }, [])

    useEffect(() => {
        console.log("change hasPerson", hasPerson);
        const changeURL = () => {
            if (hasPerson === true) {
                // setUrlTop("https://www.youtube.com/watch?v=sIhnlbGjz5M?start=10&autoplay=1");
                // setUrlBottom("https://www.youtube.com/watch?v=sIhnlbGjz5M&autoplay=1");
            }
        }
        changeURL();
        return () => {
        }
    }, [hasPerson])

    return (
        <Wrapper>
            <FaceRekogCam setHasPerson={setHasPerson} />
            <div className="first">
                <ClockC />
                <WeatherC />
            </div>

            <Container className="second">
                <NewsC />
            </Container>

            <Container>
                {hasPerson ?
                    <>
                        <SampleAds />
                        {/* <PlayAdsTop src={urlTop} /> */}
                        {/* <PlayAdsBottom src={urlBottom} /> */}
                    </> :
                    <SampleAds />
                }
            </Container>

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