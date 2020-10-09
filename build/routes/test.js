"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router(); //=================================
//             Test
//=================================


router.get("/", function (req, res) {
  res.status(200).json({
    success: true
  });
});
router.post("/listen", function (req, res) {
  res.status(200).json({
    success: true
  });
});
module.exports = router;