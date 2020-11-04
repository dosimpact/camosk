import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Icon from '@ant-design/icons';


const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
);

const HeartIcon = props => <Icon component={HeartSvg} {...props} />;


function RedBellP({
    className
    , count
    , handleCount,
    ...props }) {
    const [clock, setRedBell] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => setRedBell(new Date()), 1000)
        return () => clearInterval(timer)
    })
    return (
        <Wrapper className={className} red={count >= 3}>
            <div className="container">
                <div className="innerContainer">
                    <div className="item button centerC" onClick={() => { handleCount(); }}>
                        <HeartIcon style={{ color: 'hotpink' }} />
                        <div className="title red">비상벨</div>
                        <div>{count} </div>
                        <div>{count >= 3 ? "신고접수" : ""}</div>
                    </div>
                    <div className="item">
                        <div className="subTitle">위급상황 발생시 <span className="red">비상벨</span>을 3번 누르시오
                        관제센터와 연결됩니다.
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default RedBellP

const Wrapper = styled.div`
    /* min-width:100px; */
    /* max-width:50%; */
   
    .red{
        color:red;
    }
    .container{
        max-width:50%;
        
        display: flex;
        flex-flow: column nowrap;
        justify-content:center;
        padding:10px;
        font-weight: 700;
        background-color : ${props => props.red ? "red" : "#FED709"};

        .innerContainer{
            border:3px solid black;  
            padding:10px;
            display:grid;
            grid-template-columns: 1fr 2fr;
            gap:2px;
            & .item:nth-child(1){
                border-radius:10px;
                transition: all 5s ease-in-out; 
                :hover{
                    background-color:red;
                    opacity:0.5;
                }
            }
        }
  
    }
   
`;
