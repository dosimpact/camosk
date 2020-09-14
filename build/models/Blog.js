"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var blogSchema = mongoose.Schema({
  content: {
    type: String
  },
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});
var Blog = mongoose.model('Blog', blogSchema);
module.exports = {
  Blog: Blog
};