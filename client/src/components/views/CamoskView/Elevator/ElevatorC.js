import React, { useEffect, useState } from 'react'
import ElevatorP from "./ElevatorP"
/*
    매장 안의 키오스크를 구성한다.
*/
const ElevatorC = () => {
    // 얼굴 피드 캠에서 사람이 있는지 없는지 판단
    const [hasPerson, setHasPerson] = useState(false);
    // 0 : 최초의 상태
    // 1 : 사람이 없고, 광고 보여줄 준비가 됨
    // const [MState, setMState] = useState(true);//setReadyToShowNewAds

    // 디폴트 광고 인지 - 처음에 사람이 아무도 없을때 보여주는 광고
    const [urlTop, setUrlTop] = useState(null);
    const [urlBottom, setUrlBottom] = useState(null);


    // FaceInfoCam의 Effect를 실행시킨다.


    // dev mode : 네비게이션 안보이게 설정
    useEffect(() => {
        window.scrollTo(0, 70);
        return () => {
        }
    }, [])

    useEffect(() => {
        console.log("change hasPerson", hasPerson);
        const changeURL = () => {
            if (hasPerson === true) {
            }
        }
        changeURL();
        return () => {
        }
    }, [hasPerson])

    const handleChangeTrigger = () => {
        setHasPerson(p => !p);
    }


    return (
        <>
            <ElevatorP
                hasPerson={hasPerson}
                setHasPerson={setHasPerson}
                handleChangeTrigger={handleChangeTrigger}
            />
        </>
    )
}

export default ElevatorC
