import { compareFaces } from "./compare";

function detectFace(buf, client, onChange) {
  // 안면 감지했을 때 실행되는 함수 parseResponse

  function parseResponse(data) {
    const target = data.sort((p, q) => q.Quality.Sharpness - p.Quality.Sharpness)[0]
    onChange(target);
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
      parseResponse(response.FaceDetails)

    } else {
      console.log("No Face")
    }
  });
}

export { detectFace }