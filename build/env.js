"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

process.env.FFMPEG_PATH = _path["default"].normalize("C:/ffmpeg/bin/ffmpeg.exe");

_dotenv["default"].config();