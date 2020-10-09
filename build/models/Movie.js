"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var types = _mongoose["default"].Schema.Types;

var movieSchema = _mongoose["default"].Schema({
  title: {
    type: types.String,
    "default": "nonamed",
    trim: true,
    unique: true
  },
  comments: [{
    type: types.ObjectId,
    ref: "MovieComment"
  }]
}, {
  timestamps: true
});

movieSchema.pre("save", function (next) {
  console.log("Movie save Pre");
  next();
});

movieSchema.methods.printThis = function (cb) {
  var movie = this;
  console.log("printThis", movie);
};

movieSchema.statics.findMoiveByTitle = function (cb) {
  var movie = this;
  console.log("findMoiveByTitle", movie);
};

var Movie = _mongoose["default"].model("Movie", movieSchema);

module.exports = {
  Movie: Movie
};