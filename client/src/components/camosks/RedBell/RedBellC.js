import React, { useState, useEffect } from 'react'
import RedBellP from "./RedBellP"

// 메시지 보내는 용도 임시로 People 컴포넌트 사용
import peopleMessage from '../People/PeopleMessage'
import locationLoad from '../Location/LocationLoad'



// 현재시간을 가져와서, 14:00 , 12월 31일 등으로 표시하기
// moment .js 사용
const RedBellC = (props) => {
    const [count, setCount] = useState(0);
    const [address, setAddress] = useState(null)

    useEffect(() => {
        locationLoad().then(resp => setAddress(resp))
    }, [])

    const handleCount = (e) => {
        setCount(prev => prev + 1);
        if (count >= 2 && !address) {
            console.log("비상벨 신고됨")
            peopleMessage(null, address)
        }
    }
    return (
        <>
            <RedBellP {...props} count={count} handleCount={handleCount} />
        </>
    )
}

export default RedBellC
