import React from "react";
import styled from "styled-components";

const TeachableMP = ({ ImageRef, predict }) => {
  return (
    <Container>
      <button
        type="button"
        onClick={() => {
          predict();
        }}
      >
        Start
      </button>
      {/* <div id="webcam-container"></div> */}
      <div id="label-container"></div>
      <img
        ref={ImageRef}
        alt="doyoung"
        id="inputImage"
        src={process.env.PUBLIC_URL + "sample/sample2.jpg"}
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
