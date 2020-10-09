"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdeoDB = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Adeo = require("../../models/Adeo");

//=================================
//             adeo controller
//=================================
var createAdeoDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
    var url, keywords, title, shortDescription, thumbnails, author, related_videos, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = params.url, keywords = params.keywords, title = params.title, shortDescription = params.shortDescription, thumbnails = params.thumbnails, author = params.author, related_videos = params.related_videos;
            _context.prev = 1;
            _context.next = 4;
            return new _Adeo.Adeo({
              url: url,
              keywords: keywords,
              title: title,
              shortDescription: shortDescription,
              thumbnails: thumbnails,
              author: author,
              related_videos: related_videos
            }).save();

          case 4:
            result = _context.sent;
            console.log("addInfoDB result", result);
            return _context.abrupt("return", true);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);
            return _context.abrupt("return", false);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function createAdeoDB(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createAdeoDB = createAdeoDB;