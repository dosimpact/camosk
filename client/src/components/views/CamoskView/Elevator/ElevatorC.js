import React, { useEffect, useState } from 'react'
import { getRecommand } from "apis/reommand"

import ElevatorP from "./ElevatorP"
/*
    매장 안의 키오스크를 구성한다.
*/
const ElevatorC = () => {
    // 얼굴 피드 캠에서 사람이 있는지 없는지 판단
    const [hasPerson, setHasPerson] = useState(false);

    // 디폴트 광고 인지 - 처음에 사람이 아무도 없을때 보여주는 광고
    const [urlTop, setUrlTop] = useState(null);
    const [urlBottom, setUrlBottom] = useState(null);


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
    // 얼굴 인식한 결과, 얼굴의 target 을 통해 영상 정보를 얻어온다.
    const handle_onTarget = async (target) => {
        const { data: data1 } = await getRecommand(target);
        const { data: data2 } = await getRecommand(target);
        console.log(data1);
        console.log(data2);
        setUrlTop(data1?.url);
        setUrlBottom(data2?.url);
    }
    return (
        <>
            <ElevatorP
                hasPerson={hasPerson}
                setHasPerson={setHasPerson}
                handleChangeTrigger={handleChangeTrigger}
                handle_onTarget={handle_onTarget}
                urlTop={urlTop}
                urlBottom={urlBottom}
            />
        </>
    )
}

export default ElevatorC
