import React, { useState } from 'react'
import RedBellP from "./RedBellP"


// 현재시간을 가져와서, 14:00 , 12월 31일 등으로 표시하기
// moment .js 사용
const RedBellC = (props) => {
    const [count, setCount] = useState(0);
    const handleCount = (e) => {
        setCount(prev => prev + 1);
        if (count >= 2) {
            console.log("비상벨 신고됨")
        }
    }
    return (
        <>
            <RedBellP {...props} count={count} handleCount={handleCount} />
        </>
    )
}

export default RedBellC
