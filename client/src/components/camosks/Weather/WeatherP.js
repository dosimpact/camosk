import React, { useEffect, useState } from 'react'
import OAuth from 'oauth';
import { FrownOutlined, CloudOutlined } from "@ant-design/icons";
import styled from "styled-components";

function WeatherP({ className, info, ...props }) {

    return (
        <Wrapper>
            {info === null ?
                (<p>Loading...</p>)
                :
                <div className={className}>
                    <div className="temperature center">
                        <CloudOutlined /> {info.text}
                        {"  "}{info.temperature} &#186;C
                    </div>
                    <div className="dust">미세먼지 {"  "}<FrownOutlined />{" "}보통</div>
                </div>}
        </Wrapper>)
}

export default WeatherP

const Wrapper = styled.div`
        display: flex;
        flex-flow: column nowrap;
        justify-content:center;
        padding:10px;
        font-weight: 300;
        text-align:center;

        & .temperature{
            display:flex;
            flex-flow: row nowrap;
            font-size:45px;
            margin-bottom:17px;
        }
        & .dust{
            font-size:35px;
        }
`;  
