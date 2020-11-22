import React from "react";
import styled from "styled-components";

const TeachableMP = ({ ImageRef, ImageSRC }) => {
  return (
    <Container>
      <img
        ref={ImageRef}
        alt="doyoung"
        src={ImageSRC} // {process.env.PUBLIC_URL + "sample/sample2.jpg"}
      ></img>
    </Container>
  );
};

export default TeachableMP;

const Container = styled.div`
  img {
    width: 500px;
    height: auto;
  }
`;
