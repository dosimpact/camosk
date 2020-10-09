"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _Movie = require("../models/Movie");

var _MovieComment = require("../models/MovieComment");

var router = _express["default"].Router();

router.get("/all", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Movie.Movie.find();

          case 2:
            result = _context.sent;
            console.log(result);
            return _context.abrupt("return", res.status(200).json({
              success: true
            }));

          case 5:
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
router.post("/createMovie", function (req, res) {
  var title = req.body.title;

  _Movie.Movie.findMoiveByTitle();

  var movieIns = new _Movie.Movie({
    title: title
  });
  movieIns.printThis();
  movieIns.save().then(function (result) {
    console.log("success create movie", result);
    res.status(200).json({
      success: true
    });
  });
});
router.post("/addComment", function (req, res) {
  var _req$body = req.body,
      content = _req$body.content,
      movieID = _req$body.movieID;
  var movieComment = new _MovieComment.MovieComment({
    content: content,
    movieID: movieID
  });
  movieComment.save().then(function (result) {
    console.log("success create movie", result);
    res.status(200).json({
      success: true
    });
  });
});
router.post("/createComment", function (req, res) {
  var _req$body2 = req.body,
      content = _req$body2.content,
      movieID = _req$body2.movieID;
  var movieComment = new _MovieComment.MovieComment({
    content: content,
    movieID: movieID
  });
  movieComment.save().then(function (result) {
    console.log("success create movie", result);
    res.status(200).json({
      success: true
    });
  });
});
module.exports = router;