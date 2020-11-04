import React from "react";
import styled from "styled-components"
import Order from "components/camosks/Order"

import ClockC from "components/camosks/Clock/ClockC"
import NewsC from "components/camosks/News/NewsC"
import WeatherC from "components/camosks/Weather/WeatherC"
import QRCodeC from "components/camosks/QRCode/QRCodeC"
import SampleAds from "components/camosks/SampleAds/SampleAds";

function Test() {
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
        <QRCodeC url="https://ithub.tistory.com/320" />
      </Container>

      <Container>
        <Order />
      </Container>

      <Container>
        <SampleAds />
      </Container>

    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  width:100%;

  & .first{    
    display:grid;
    padding: 20px;
    grid-template-columns:1fr 1fr;
  }

  & .second{
    margin-top: 50px;
  }
`;

const Container = styled.div`


`;
