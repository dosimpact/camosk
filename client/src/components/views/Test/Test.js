import React, { useState } from "react";
import styled from "styled-components";

import Order from "components/camosks/Order";

import ClockC from "components/camosks/Clock/ClockC";
import NewsC from "components/camosks/News/NewsC";
import WeatherC from "components/camosks/Weather/WeatherC";
import QRCodeC from "components/camosks/QRCode/QRCodeC";
import SampleAds from "components/camosks/SampleAds/SampleAdsDummy";
import RedBellC from "components/camosks/RedBell/RedBellC";
import PeopleNoticeC from "components/camosks/PeopleNotice/PeopleNoticeC";

import TeachableMC from "components/camosks/TeachableM/TeachableMC";

function Test() {
  const model_URL = "https://teachablemachine.withgoogle.com/models/NJVFBTQ5W/";
  const [trigger, onTrigger] = useState();
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <Wrapper>
      <TeachableMC
        model_URL={model_URL}
        ImageSRC={process.env.PUBLIC_URL + "sample/sample1.jpg"}
        trigger={trigger}
        onChange={handleOnChange}
      />
      <button
        onClick={() => {
          onTrigger((prev) => !prev);
        }}
      >
        Trigger
      </button>
      {/* 
      <Container>
        <RedBellC />
      </Container>
      <Container>
        <PeopleNoticeC />
      </Container>

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
      </Container> */}
    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  width: 100%;

  & .first {
    display: grid;
    padding: 20px;
    grid-template-columns: 1fr 1fr;
  }

  & .second {
    margin-top: 50px;
  }
`;

const Container = styled.div``;
