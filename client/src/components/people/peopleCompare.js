import AWS from 'aws-sdk'

import peopleMessage from "./peopleMessage";

export default async (targets, captured, isTesting, setFlash, address) => {
    const config = new AWS.Config({
        accessKeyId: "AKIAV7NXXUK7R2XA2K2S",
        secretAccessKey: "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",
        region: "ap-southeast-2",
      }) // AWS 설정
    AWS.config = config
    const client = new AWS.Rekognition(); // 클라이언트 생성
    
    for(let i = 0; i < targets.length; i++){
      await (function(){
        return new Promise((res, _) => {
          setTimeout(() => {
            res()
          }, (i) * 3000)
        })
      })() // 인덱스 * 3초간 멈추기 - aws 과다 호출 방지 목적
      const params = {
        SourceImage: {
            Bytes: targets[i].poster, // 버퍼값
        },
        TargetImage: {
            Bytes: captured,
        },
        SimilarityThreshold: 80
      }
      // 분명 await 적용
      await (function(){
        return new Promise((res, _) => {
          client.compareFaces(params, async function (err, response) {
            if (err) {
              console.log(err, err.stack); // an error occurred
            } else {
              console.log("The Comparison is starting!")
              if (response.FaceMatches.length === 0) {
                console.log("No People Found.");
              } else {
                response.FaceMatches.forEach(data => {
                  let position = data.Face.BoundingBox;
                  let similarity = data.Similarity;
                  console.log(`The face at: ${position.Left}, ${position.Top} matches with ${similarity} % confidence`);
                });
                //peopleMessage(targets[i].name, address) 메시지 보내는 함수
                setFlash(...targets[i]) // 플래시 메시지의 대상을 해당 인물로 변경
              }
            } // if
            await (function(){
              return new Promise((res, _) => {
                setTimeout(() => res(), 3000)
              })
            })()
            res()
          });
        })
      })()
    }
}