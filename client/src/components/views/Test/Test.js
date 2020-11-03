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
      <Container>
        <ClockC />
      </Container>

      <Container>
        <NewsC />
      </Container>

      <Container>
        <WeatherC />
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

`;

const Container = styled.div`


`;
