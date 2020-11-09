import React from 'react'
import styled from "styled-components";
const SampleAds = ({ className, ...props }) => {
    return (
        <Wrapper className={className}>
            <div className="container">
                <iframe className="ads" src="https://www.youtube.com/embed/3MSPHzlRXQQ?start=10&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="ads" src="https://www.youtube.com/embed/3MSPHzlRXQQ?start=600&autoplay=1" frameborder="0" allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </Wrapper >
    )
}

export default SampleAds;

const Wrapper = styled.div`
    width:100%;
    & .container{
        width:100vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content:center;
    
        & .ads{
            width:100vw;
            height:60vw;
            min-width:560px;
            min-height:315px;
        }
    }

`;  