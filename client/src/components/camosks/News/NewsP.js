import React from 'react';
import styled from "styled-components";
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function NewsP({ className, data, metaData, ...props }) {
    if (data === null) {
        return <p>Loading...</p>
    } else {
        return (
            <Wrapper className={className}>
                <div className="title">오늘의 주요 뉴스</div>
                <Carousel autoplay  >
                    {
                        metaData &&
                        metaData.length > 0 &&
                        metaData?.map((e, idx) => {
                            return (
                                <div className="Item" key={idx} >
                                    <h3 className="ItemContent" style={contentStyle}>{e.title}</h3>
                                </div>)
                        })
                    }
                    {/* <div style={{ display: "flex" }} >
                        <div>
                            <h4 style={{ width: 300 }}>{data.title}</h4>
                            <h5 style={{ width: 300 }}>{data.description}</h5>
                            <small>{data.date}</small>
                        </div>
                        <div style={{ width: 48, marginLeft: 8 }}>
                            <img src={data.urlToImage} alt='poster' style={{ width: "100%" }} />
                        </div>
                    </div> */}
                </Carousel>
            </Wrapper>
        )
    }
}

export default NewsP

const Wrapper = styled.div`
    /* min-width:100px; */
    /* max-width:50%; */
    font-weight:300;
    margin:10px 0px;
    .title{
        text-align:center;
        font-size:40px;
        margin:10px 0px;
        font-weight:400;
        color: #7d7d7d;
    }
    .ItemContent{
        font-size:20px;
    }
   
`;
