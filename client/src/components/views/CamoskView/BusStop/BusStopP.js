import React, { useEffect } from 'react'
import styled from "styled-components"
import Order from "components/camosks/Order"

import ClockC from "components/camosks/Clock/ClockC"
import NewsC from "components/camosks/News/NewsC"
import WeatherC from "components/camosks/Weather/WeatherC"
import QRCodeC from "components/camosks/QRCode/QRCodeC"
import SampleAds from "components/camosks/SampleAds/SampleAds";


/*
    매장 안의 키오스크를 구성한다.
*/
const BusStopP = () => {
    useEffect(() => {
        window.scrollTo(0, 70);
        return () => {
        }
    }, [])
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

        </Wrapper>
    )
}

export default BusStopP

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