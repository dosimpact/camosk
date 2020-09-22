import express from "express";
import fs from "fs";
import ytdl from "ytdl-core";
import readline from "readline";
import path from "path";
import ffmpeg from "fluent-ffmpeg";

const router = express.Router();

const onProgress = (chunkLength, downloaded, total) => {
  const percent = downloaded / total;
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
  process.stdout.write(
    `(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(
      total /
      1024 /
      1024
    ).toFixed(2)}MB)`
  );
};
//=================================
//             video
//=================================

router.post("/download", async (req, res) => {
  const { url } = req.body;
  const info = await ytdl.getInfo(url);

  ytdl(url).pipe(
    fs.createWriteStream(`videos/${info.title.replace("/\u20A9/g", "")}.mp4`)
  );
  res.status(200).json({ success: true, title: info.title });
});

router.post("/downloadHV", async (req, res) => {
  const { url } = req.body;
  if (url === undefined) {
    res.status(200).json({ success: false });
  }

  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title.replace(
    /\:*\**\/*\?*\"*\<*\>*\|*\s*/g,
    ""
  );
  console.log(title);
  const audioOutput = `videos/${title}_audio.mp4`;
  const videoOutput = `videos/${title}_video.mp4`;
  const mainOutput = `videos/${title}.mp4`;

  // const audioOutput = path.resolve(__dirname, "sound.mp4");
  // const videoOutput = path.resolve(__dirname, "video.mp4");
  // const mainOutput = path.resolve(__dirname, "output.mp4");

  ytdl(url, {
    filter: (format) => format.container === "mp4" && !format.qualityLabel,
    quality: "highest",
  })
    .on("progress", onProgress)
    .pipe(fs.createWriteStream(`${audioOutput}`));

  ytdl(url, {
    filter: (format) => format.container === "mp4" && !format.audioEncoding,
    quality: 137,
  })
    .on("progress", onProgress)
    .pipe(fs.createWriteStream(`${videoOutput}`))
    .on("finish", () => {
      ffmpeg()
        .input(videoOutput)
        .videoCodec("copy")
        .input(audioOutput)
        .audioCodec("copy")
        .save(mainOutput)
        .on("error", () => {
          res.status(200).json({ success: false, title });
        })
        .on("end", () => {
          fs.unlink(audioOutput, (err) => {
            if (err) console.error(err);
            else
              console.log(`\nfinished downloading, delete to ${audioOutput}`);
          });

          fs.unlink(videoOutput, (err) => {
            if (err) console.error(err);
            else
              console.log(`\nfinished downloading, delete to ${videoOutput}`);
          });
          res
            .status(200)
            .json({ success: true, title, url: `vidoes/${title}` });
        });
    });
});

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
  const fullPath = `videos/${fileName}.mp4`;
  const fileState = fs.statSync(fullPath);
  const { size } = fileState;
  const { range } = req.headers;
  console.log(size, range);
  if (range) {
    // bytes= 부분을 없애고 - 단위로 문자열을 자름
    const parts = range.replace(/bytes=/, "").split("-");
    // 시작 부분의 문자열을 정수형으로 변환
    const start = parseInt(parts[0]);
    // 끝 부분의 문자열을 정수형으로 변환 (끝 부분이 없으면 총 파일 사이즈에서 - 1)
    const end = parts[1] ? parseInt(parts[1]) : size - 1;
    // 내보낼 부분의 길이
    const chunk = end - start + 1;
    // 시작 부분과 끝 부분의 스트림을 읽음
    console.log("범위에 대한 요청 START END CHUNK", start, end, chunk);
    const stream = fs.createReadStream(fullPath, { start, end });
    // 응답
    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunk,
      "Content-Type": "video/mp4",
    });
    // 스트림을 내보냄
    stream.pipe(res);
  } else {
    console.log("범위에 대한 요청이 아님");
    // 범위에 대한 요청이 아님
    res.writeHead(200, {
      "Content-Length": size,
      "Content-Type": "video/mp4",
    });
    // 스트림을 만들고 응답에 실어보냄
    fs.createReadStream(fullPath).pipe(res);
    // res.status(200).json({ sucess: true });
  }
});

module.exports = router;
