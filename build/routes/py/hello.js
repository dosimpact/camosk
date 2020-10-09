"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _key = _interopRequireDefault(require("../../config/key"));

var router = _express["default"].Router(); //=================================
//             py hello
//=================================


var BASE_PYTHON_PATH = _key["default"].BASE_PYTHON_PATH; //   "C:/Users/Dos/AppData/Local/Continuum/anaconda3/envs/alldeep/python.exe";

var BASE_URL = _path["default"].join(__dirname, "../../python/");

router.get("/", function (req, res) {
  var spawn = require("child_process").spawn;

  console.log("> python ".concat(BASE_URL, "sampleArgs.py"), req.query.numberOfCountries, req.query.aggregationInterval);
  var process = spawn(BASE_PYTHON_PATH, ["".concat(BASE_URL, "sampleArgs.py"), req.query.numberOfCountries, // for example ~ 3
  req.query.aggregationInterval // for example ~ W for Week
  ]);
  process.stdout.on("data", function (data) {
    res.send(data.toString());
  });
  process.stderr.on("data", function (data) {
    console.log("stderr: " + data);
  });
});
router.get("/hello", function (req, res) {
  var spawn = require("child_process").spawn;

  console.log("> python ".concat(BASE_URL, "hello.py"), req.query.numberOfCountries, req.query.aggregationInterval);
  var process = spawn("python", ["".concat(BASE_URL, "hello.py"), req.query.numberOfCountries, // for example ~ 3
  req.query.aggregationInterval // for example ~ W for Week
  ]);
  process.stdout.on("data", function (data) {
    res.send(data.toString());
  });
  process.stderr.on("data", function (data) {
    console.log("stderr: " + data);
  });
});
module.exports = router;