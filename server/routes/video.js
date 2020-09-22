import express from "express";
import fs from "fs";

const router = express.Router();

//=================================
//             video
//=================================

router.get("/", (req, res) => {
  const stream = fs.createReadStream("videos/01.mp4");
  let count = 0;
  stream.on("data", function (data) {
    count = count + 1;
    console.log("data count=" + count);
    // 3.1. data 이벤트가 발생되면 해당 data를 클라이언트로 전송
    res.write(data);
  });

  // 4. 데이터 전송이 완료되면 end 이벤트 발생
  stream.on("end", function () {
    console.log("end streaming");
    // 4.1. 클라이언트에 전송완료를 알림
    res.end();
  });

  // 5. 스트림도중 에러 발생시 error 이벤트 발생
  stream.on("error", function (err) {
    console.log("stream error", err);
    // 5.2. 클라이언트로 에러메시지를 전달하고 전송완료
    res.end("500 Internal Server " + err);
  });
});

router.get("/range/:fileName", (req, res) => {
  const { fileName } = req.params;
  console.log(fileName);
  res.status(200).json({ sucess: true });
});

module.exports = router;
