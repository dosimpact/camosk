import React from "react";
import styled from "styled-components"
import Order from "components/camosks/Order"

import ClockC from "components/camosks/Clock/ClockC"
import NewsC from "components/camosks/News/NewsC"
import WeatherC from "components/camosks/Weather/WeatherC"
import QRCodeC from "components/camosks/QRCode/QRCodeC"

function Test() {
  return (
    <Wrapper>

      <div className="first">
        <ClockC />
        <WeatherC />
      </div>

      <Container>
        <NewsC />
      </Container>



      <Container>
        <QRCodeC url="https://ithub.tistory.com/320" />
      </Container>

      <Container>
        <Order />
      </Container>
    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  width:100%;
  & .first{
    display:grid;
    grid-template-columns:1fr 1fr;
  }
`;

const Container = styled.div`


`;
