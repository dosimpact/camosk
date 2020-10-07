import express from "express";
import path from "path";
import config from "../../config/key";

const router = express.Router();

//=================================
//             py hello
//=================================

const BASE_PYTHON_PATH = config.BASE_PYTHON_PATH;
//   "C:/Users/Dos/AppData/Local/Continuum/anaconda3/envs/alldeep/python.exe";
const BASE_URL = path.join(__dirname, "../../python/");

router.get("/", (req, res) => {
  const spawn = require("child_process").spawn;
  console.log(
    `> python ${BASE_URL}sampleArgs.py`,
    req.query.numberOfCountries,
    req.query.aggregationInterval
  );
  const process = spawn(BASE_PYTHON_PATH, [
    `${BASE_URL}sampleArgs.py`,
    req.query.numberOfCountries, // for example ~ 3
    req.query.aggregationInterval, // for example ~ W for Week
  ]);

  process.stdout.on("data", function (data) {
    res.send(data.toString());
  });

  process.stderr.on("data", function (data) {
    console.log("stderr: " + data);
  });
});

router.get("/hello", (req, res) => {
  const spawn = require("child_process").spawn;
  console.log(
    `> python ${BASE_URL}hello.py`,
    req.query.numberOfCountries,
    req.query.aggregationInterval
  );
  const process = spawn("python", [
    `${BASE_URL}hello.py`,
    req.query.numberOfCountries, // for example ~ 3
    req.query.aggregationInterval, // for example ~ W for Week
  ]);

  process.stdout.on("data", function (data) {
    res.send(data.toString());
  });

  process.stderr.on("data", function (data) {
    console.log("stderr: " + data);
  });
});

module.exports = router;
