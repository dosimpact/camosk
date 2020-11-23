export default async (client, webcam, targets, address, isTesting) => {
    console.log("Captured")
    const captured = webcam.current.getScreenshot();
    const buf = Buffer.from(captured.replace("data:image/jpeg;base64,", ""), "base64")
    for(let i = 0; i < targets.length; i++){
        await (function(){
            return new Promise((res, _) => {
                setTimeout(() => res(), 3000)
            })
        })()
        const params = {
            SourceImage: {
                Bytes: targets[i].poster, // 버퍼값
            },
            TargetImage: {
                Bytes: buf,
            },
            SimilarityThreshold: 80
        }
        const isFound = await (function(){
            return new Promise((res, rej) => {
                client.compareFaces(params, async function (err, response) {
                    if (err) {
                        console.log(err, err.stack); // an error occurred
                        rej(false)
                    } else {
                        console.log("The Comparison is starting!")
                        if (response.FaceMatches.length === 0) {
                            res(false)
                        } else {
                            response.FaceMatches.forEach(data => {
                                let position = data.Face.BoundingBox;
                                let similarity = data.Similarity;
                                console.log(`The face at: ${position.Left}, ${position.Top} matches with ${similarity} % confidence`);
                            });
                            res(true)
                        }
                    }
                });
            })
        })();
        console.log(address)
        if(isFound){
            //criminalMessage(targets[i], address)
            //바로 이 부분이 peopleCompare와 차이가 있음
            const {id, name, cause, term} = targets[i]
            console.log(`${id} : ${name}, ${cause}, ${term}\n${address}`)
        } else {
            console.log("No People Found")
        }
    }
    /*
    testing 상태 변수를 false로 바꾸어서 다시 실행되게 끔
    이 구문이 없으면 최초 한 번 실행되고 끝
    */
    //isTesting(false)
}