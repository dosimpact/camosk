import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const CustomAds = ({ className, url, ...props }) => {
  return (
    <Wrapper className={className}>
      <ReactPlayer
        url={url || "https://www.youtube.com/watch?v=3MSPHzlRXQQ&t=14s"}
        width="auto"
        height="100%"
        className="ads"
        muted={true}
        playing={true}
      />
    </Wrapper>
  );
};

export default CustomAds;

const Wrapper = styled.div`
  & .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
`;
