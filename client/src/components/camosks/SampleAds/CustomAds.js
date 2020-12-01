import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const CustomAds = ({ className, url, ...props }) => {
  return (
    <Wrapper className={className}>
      <div className="container">
        <ReactPlayer
          url={url || "https://www.youtube.com/watch?v=3MSPHzlRXQQ&t=14s"}
          // onEnded={() => { setAds(false); setIsShoping(true); scrollToPurchase(); }}
          // onPause={() => { setAds(false); setIsShoping(true); scrollToPurchase(); }}
          width="auto"
          height="100%"
          className="ads"
          muted={true}
          playing={true}
        />
        {/* <iframe className="ads" src="https://www.youtube.com/embed/3MSPHzlRXQQ?start=10&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        {/* <iframe className="ads" src="https://www.youtube.com/embed/3MSPHzlRXQQ?start=600&autoplay=1" frameborder="0" allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
    </Wrapper>
  );
};

export default CustomAds;

const Wrapper = styled.div`
  width: 80vw;
  & .container {
    width: auto;
    height: 180px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
`;
