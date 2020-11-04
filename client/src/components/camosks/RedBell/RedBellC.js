import React from 'react'
import RedBellP from "./RedBellP"


// 현재시간을 가져와서, 14:00 , 12월 31일 등으로 표시하기
// moment .js 사용
const RedBellC = (props) => {
    return (
        <>
            <RedBellP {...props} />
        </>
    )
}

export default RedBellC
