import React, { useState, useEffect } from 'react'
import styled from "styled-components";

function ClockP({ className, ...props }) {
    const [clock, setClock] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => setClock(new Date()), 1000)
        return () => clearInterval(timer)
    })
    return (
        <Wrapper className={className}>
            <div className="container">
                <div className="Date">{clock.toLocaleDateString().substr(0, 11)}</div>
                <div className="TikTok">{clock.toLocaleTimeString()}</div>
            </div>
        </Wrapper>
    )
}

export default ClockP

const Wrapper = styled.div`
    /* min-width:100px; */
    /* max-width:50%; */
    
    .container{
        display: flex;
        flex-flow: column nowrap;
        justify-content:center;
        padding:10px;
        font-weight: 300;
        text-align:center;
        .Date{
            font-size:48px;
            margin-bottom:10px;
        }
        .TikTok{
            font-size:50px;
       
        }
    
    }
   
`;
