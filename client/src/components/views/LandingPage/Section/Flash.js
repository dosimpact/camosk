import React, {useState} from 'react';

export default (flash) => {
    if (flash == null){
        return <></>
    } else {
        const {type, name} = flash 
        const job = type === 0 ? "실종인물" : type === 1 ? "학생" : "범죄자"
        return (
            <div>
                <h4>{job}, {name}이 지금 발견되었습니다.!</h4>
            </div>
        )
    }
}