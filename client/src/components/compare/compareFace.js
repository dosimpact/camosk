import peopleMessage from "../people/peopleMessage";

export default async (
  client,
  webcam,
  targets,
  address,
  isTesting,
  onChange
) => {
  console.log("Captured");
  const captured = webcam.current.getScreenshot();
  const buf = Buffer.from(
    captured.replace("data:image/jpeg;base64,", ""),
    "base64"
  );
  for (let i = 0; i < targets.length; i++) {
    await (function () {
      return new Promise((res, _) => {
        setTimeout(() => res(), 3000);
      });
    })();
    const params = {
      SourceImage: {
        Bytes: targets[i].poster, // 버퍼값
      },
      TargetImage: {
        Bytes: buf,
      },
      SimilarityThreshold: 80,
    };
    const isFound = await (function () {
      return new Promise((res, rej) => {
        client.compareFaces(params, async function (err, response) {
          if (err) {
            console.log(err, err.stack); // an error occurred
            rej(false);
          } else {
            console.log("The Comparison is starting!");
            if (response.FaceMatches.length === 0) {
              res(false);
            } else {
              response.FaceMatches.forEach((data) => {
                let position = data.Face.BoundingBox;
                let similarity = data.Similarity;
                console.log(
                  `The face at: ${position.Left}, ${position.Top} matches with ${similarity} % confidence`
                );
              });
              res(true);
            }
          }
        });
      });
    })();
    // console.log(address);
    if (isFound) {
      //peopleMessage(targets[i], address)
      const { key, name, gender, age, clothes } = targets[i];
      //   alert(`${key} : ${name}, ${gender}, ${age}, ${clothes}`);
      // console.log(`${key} : ${name}, ${gender}, ${age}, ${clothes}`);
      if(onChange){
        onChange({
          data: {
            address,
            key,
            name,
            gender,
            age,
            clothes,
          },
          isFound,
        });
      }
    } else {
      console.log("No People Found");
    }
  }
  isTesting(false);
};
