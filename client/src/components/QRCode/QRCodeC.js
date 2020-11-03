import React from 'react'
import QRCodeP from "./QRCodeP"


// 특정 url를 QR코드화 하는 컴포넌트 ( 홈페이지를 직접 QR 코드로 인코딩)
// 마우스를 hover시 크기를 키워준다 . ( optional )
// 광고에 대한 메타정보 출력  - 광고에 대한 이름, 
const QRCodeC = (props) => {
    const {url} = props;
    return (
        <>
            <QRCodeP url={url}/>
        </>
    )
}

export default QRCodeC
