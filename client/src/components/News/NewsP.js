import React, {useState, useEffect} from 'react'
import axios from 'axios';

function NewsP() {
    const [metaData, setMetaData] = useState(null);
    const [data, setData] = useState(null);


    //뉴스 목록 가져오는 코드가 길어져서 함수로 분리함
    const fetchArticles = (setMetaData /* setState 매개변수 */) => {
        console.log('A News Article List is being fetched...')
        const apiKey = "79bdd7fdec4c412c875134625c720d95";
        const apiUrl = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=';
        axios.get(apiUrl+apiKey).then(resp => resp.data)
        .then(data => data.articles)
        .then(documents => {
            console.log(documents.length)
            console.log(documents[0])
            setMetaData(documents)
        })
    }

    //3시간 마다 한 번씩 뉴스 목록 갱신
    useEffect(() => {
        fetchArticles(setMetaData)
        const metaTimer = setInterval(() => {
            fetchArticles(setMetaData)
        }, 10800000)
        return () => clearInterval(metaTimer)
    }, [])

    //뉴스 metaData 변수에 뉴스 목록이 들어오면 useEffect 내 else 구문 실행
    useEffect(() => {
        if(metaData == null){
            console.log("DATA Being Fetched...")
        } else {
            console.log('A News Article is being fetched...')
            let index = 0;
            let len = metaData.length;
            // 뉴스 목록을 순회하기 위해 index와 전체 길이 len 설정

            setData(metaData[index])
            
            const timer = setInterval(() => {
                //3분마다 index 1 증가
                index++;
                if(index >= len){
                    index = 0;
                }
                console.log('A News Article is being refreshed...')
                setData(metaData[index])
            }, 180000)
            return () => clearInterval(timer)
        }
    }, [metaData])
    
    
    
    if(data == null){
        return <p>Loading...</p>
    } else {
        return (
            <div style={{display:"flex"}}>
                <div>
                    <h4 style={{width:300}}>{data.title}</h4>
                    <h5 style={{width:300}}>{data.description}</h5>
                    <small>{data.date}</small>
                </div>
                <div style={{width: 48, marginLeft: 8}}>
                    <img src={data.urlToImage} alt='poster' style={{width: "100%"}}/>
                </div>
            </div>
        )
    }
}

export default NewsP
