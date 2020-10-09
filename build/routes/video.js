"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _ytdlCore = _interopRequireDefault(require("ytdl-core"));

var _readline = _interopRequireDefault(require("readline"));

var _path = _interopRequireDefault(require("path"));

var _fluentFfmpeg = _interopRequireDefault(require("fluent-ffmpeg"));

var _saveInfo = require("../controller/Adeos/saveInfo");

var _Adeo = require("../models/Adeo");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var router = _express["default"].Router();

var onProgress = function onProgress(chunkLength, downloaded, total) {
  var percent = downloaded / total;

  _readline["default"].cursorTo(process.stdout, 0);

  process.stdout.write("".concat((percent * 100).toFixed(2), "%\xA0downloaded\xA0"));
  process.stdout.write("(".concat((downloaded / 1024 / 1024).toFixed(2), "MB\xA0of\xA0").concat((total / 1024 / 1024).toFixed(2), "MB)"));
}; //=================================
//             video
//=================================


router.get("/:fileName", function (req, res) {
  var fileName = decodeURIComponent(req.params.fileName);
  console.log("fileName", fileName);
  var fullPath = "videos/".concat(fileName, ".mp4");

  var stream = _fs["default"].createReadStream(fullPath);

  var count = 0;
  res.writeHead(200, {
    "Content-Type": "video/mp4"
  });
  stream.on("data", function (data) {
    count = count + 1;
    console.log("data count=" + count); // 3.1. data 이벤트가 발생되면 해당 data를 클라이언트로 전송

    res.write(data);
  }); // 4. 데이터 전송이 완료되면 end 이벤트 발생

  stream.on("end", function () {
    console.log("end streaming"); // 4.1. 클라이언트에 전송완료를 알림

    res.end();
  }); // 5. 스트림도중 에러 발생시 error 이벤트 발생

  stream.on("error", function (err) {
    console.log("stream error", err); // 5.2. 클라이언트로 에러메시지를 전달하고 전송완료

    res.end("500 Internal Server " + err);
  });
});
router.post("/info", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var url, info;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = req.body.url;
            _context.next = 3;
            return _ytdlCore["default"].getInfo(url);

          case 3:
            info = _context.sent;
            console.log(info.videoDetails.keywords);
            console.log(info.videoDetails.title);
            console.log(info.videoDetails.shortDescription);
            console.log(info.videoDetails.thumbnail.thumbnails[3]);
            console.log(info.videoDetails.author);
            console.log(info.related_videos);
            res.status(200).json({
              success: true,
              info: {
                keywords: info.videoDetails.keywords,
                title: info.videoDetails.title,
                shortDescription: info.videoDetails.shortDescription,
                thumbnail: info.videoDetails.thumbnail.thumbnails[3],
                author: info.videoDetails.author,
                related_videos: info.related_videos
              }
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post("/addInfoDB", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var url, info, info_es;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = req.body.url;
            _context2.next = 3;
            return _ytdlCore["default"].getInfo(url);

          case 3:
            info = _context2.sent;
            // console.log(info.videoDetails.keywords);
            // console.log(info.videoDetails.title);
            // console.log(info.videoDetails.shortDescription);
            // console.log(info.videoDetails.thumbnail.thumbnails[3]);
            // console.log(info.videoDetails.author);
            // console.log(info.related_videos);
            info_es = {
              url: url,
              keywords: info.videoDetails.keywords,
              title: info.videoDetails.title,
              shortDescription: info.videoDetails.shortDescription,
              thumbnail: info.videoDetails.thumbnail.thumbnails[3].url,
              author: info.videoDetails.author,
              related_videos: info.related_videos
            };
            _context2.next = 7;
            return (0, _saveInfo.createAdeoDB)(info_es);

          case 7:
            // try {
            //   const result = await new Adeo({
            //     ...info_es,
            //   }).save();
            //   console.log("addInfoDB result", result);
            // } catch (error) {
            //   console.error(error);
            // }
            res.status(200).json({
              success: true,
              info: info_es
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post("/download", /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var url, info, title;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = req.body.url;
            _context3.next = 3;
            return _ytdlCore["default"].getInfo(url);

          case 3:
            info = _context3.sent;
            title = info.videoDetails.title.replace(/\u20A9\:*\**\/*\?*\"*\<*\>*\|*\s*/g, "");
            (0, _ytdlCore["default"])(url).pipe(_fs["default"].createWriteStream("videos/".concat(title, ".mp4")));
            res.status(200).json({
              success: true,
              title: info.title
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.post("/downloadHV", /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, url, v, YOUTUBE_URL, title, info, audioOutput, videoOutput, mainOutput;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, url = _req$body.url, v = _req$body.v;

            if (url === undefined && v === undefined) {
              res.status(200).json({
                success: false
              });
            }

            YOUTUBE_URL = "https://www.youtube.com/watch?v=".concat(v);

            if (!url) {
              url = YOUTUBE_URL;
            }

            title = v;

            if (title) {
              _context4.next = 10;
              break;
            }

            _context4.next = 8;
            return _ytdlCore["default"].getInfo(url);

          case 8:
            info = _context4.sent;
            title = info.videoDetails.title.replace(/\:*\**\/*\?*\"*\<*\>*\|*\s*/g, "");

          case 10:
            console.log("title", title, "url", url);
            audioOutput = "videos/tmp_audio.mp4";
            videoOutput = "videos/tmp_video.mp4";
            mainOutput = "videos/".concat(title, ".mp4"); // const audioOutput = path.resolve(__dirname, "sound.mp4");
            // const videoOutput = path.resolve(__dirname, "video.mp4");
            // const mainOutput = path.resolve(__dirname, "output.mp4");

            (0, _ytdlCore["default"])(url, {
              filter: function filter(format) {
                return format.container === "mp4" && !format.qualityLabel;
              },
              quality: "highestaudio"
            }).on("progress", onProgress).pipe(_fs["default"].createWriteStream("".concat(audioOutput)));
            (0, _ytdlCore["default"])(url, {
              filter: function filter(format) {
                return format.container === "mp4" && !format.audioEncoding;
              },
              quality: "highestvideo"
            }).on("progress", onProgress).pipe(_fs["default"].createWriteStream("".concat(videoOutput))).on("finish", function () {
              (0, _fluentFfmpeg["default"])().input(videoOutput).videoCodec("copy").input(audioOutput).audioCodec("copy").save(mainOutput).on("error", function () {
                res.status(200).json({
                  success: false,
                  title: title
                });
              }).on("end", function () {
                _fs["default"].unlink(audioOutput, function (err) {
                  if (err) console.error(err);else console.log("\nfinished\xA0downloading,\xA0delete\xA0to\xA0".concat(audioOutput));
                });

                _fs["default"].unlink(videoOutput, function (err) {
                  if (err) console.error(err);else console.log("\nfinished\xA0downloading,\xA0delete\xA0to\xA0".concat(videoOutput));
                });

                res.status(200).json({
                  success: true,
                  title: title,
                  url: "vidoes/".concat(title)
                });
              });
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.get("/range/:fileName", function (req, res) {
  var fileName = decodeURIComponent(req.params.fileName);
  console.log("fileName", fileName);
  var fullPath = "videos/".concat(fileName, ".mp4");

  var fileState = _fs["default"].statSync(fullPath);

  var size = fileState.size;
  var range = req.headers.range;
  console.log(size, range);

  if (range) {
    // bytes= 부분을 없애고 - 단위로 문자열을 자름
    var parts = range.replace(/bytes=/, "").split("-"); // 시작 부분의 문자열을 정수형으로 변환

    var start = parseInt(parts[0]); // 끝 부분의 문자열을 정수형으로 변환 (끝 부분이 없으면 총 파일 사이즈에서 - 1)

    var end = parts[1] ? parseInt(parts[1]) : size - 1; // 내보낼 부분의 길이

    var chunk = end - start + 1; // 시작 부분과 끝 부분의 스트림을 읽음

    console.log("범위에 대한 요청 START END CHUNK", start, end, chunk);

    var stream = _fs["default"].createReadStream(fullPath, {
      start: start,
      end: end
    }); // 응답


    res.writeHead(206, {
      "Content-Range": "bytes ".concat(start, "-").concat(end, "/").concat(size),
      "Accept-Ranges": "bytes",
      "Content-Length": chunk,
      "Content-Type": "video/mp4"
    }); // 스트림을 내보냄

    stream.pipe(res);
  } else {
    console.log("범위에 대한 요청이 아님"); // 범위에 대한 요청이 아님

    res.writeHead(200, {
      "Content-Length": size,
      "Content-Type": "video/mp4"
    }); // 스트림을 만들고 응답에 실어보냄

    _fs["default"].createReadStream(fullPath).pipe(res); // res.status(200).json({ sucess: true });

  }
});
module.exports = router;