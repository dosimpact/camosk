import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function NewsP({ className, data, ...props }) {
    if (data === null) {
        return <p>Loading...</p>
    } else {
        return (
            <div className={className}>
                <Carousel autoplay>
                    <div style={{ display: "flex" }} >
                        <div>
                            <h4 style={{ width: 300 }}>{data.title}</h4>
                            <h5 style={{ width: 300 }}>{data.description}</h5>
                            <small>{data.date}</small>
                        </div>
                        <div style={{ width: 48, marginLeft: 8 }}>
                            <img src={data.urlToImage} alt='poster' style={{ width: "100%" }} />
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default NewsP
