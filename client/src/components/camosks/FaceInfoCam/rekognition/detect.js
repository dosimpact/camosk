import { compareFaces } from "./compare";
import { fetchApi } from "./adapi";

function detectFace(buf, client, setAds, setContent, onChange) {
  // 안면 감지했을 때 실행되는 함수 parseResponse

  function parseResponse(data, setAds, setContent) {
    const target = data.sort((p, q) => q.Quality.Sharpness - p.Quality.Sharpness)[0]
    // 제일 선명한 사진 하나만 사용
    console.log(target)
    onChange(target);
    // 추천 동영상 호출
    fetchApi(target, setAds, setContent); // 동영상 주소 호출하는 함수에 다시 setAds, setContent 전달
    //setContent(advertisement);
    //setAds(true);  
  }

  const params = {
    Image: {
      Bytes: buf // 버퍼 형태의 매개변수
    },
    Attributes: ['ALL']
  }

  client.detectFaces(params, function (err, response) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else if (response.FaceDetails.length > 0) {
      compareFaces(buf); // 추후에 작성할 안면 비교 코드

      parseResponse(response.FaceDetails, setAds, setContent)
      //parseResponse에 setAds, setContent 함수 그대로 전달
    } else {
      console.log("No Face")
    }
  });
}

export { detectFace }