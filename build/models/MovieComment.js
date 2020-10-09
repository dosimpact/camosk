"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var types = _mongoose["default"].Schema.Types;

var movieCommentSchema = _mongoose["default"].Schema({
  content: {
    type: types.String,
    "default": "noComment",
    trim: true
  },
  movie: {
    type: types.ObjectId,
    required: true,
    ref: "Movie"
  },
  isDeleted: {
    type: types.Boolean,
    "default": false
  }
}, {
  timestamps: true
});

var MovieComment = _mongoose["default"].model("MovieComment", movieCommentSchema);

module.exports = {
  MovieComment: MovieComment
};