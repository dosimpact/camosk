"use strict";

var express = require('express');

var router = express.Router();

var _require = require("../models/Blog"),
    Blog = _require.Blog;

var _require2 = require("../middleware/auth"),
    auth = _require2.auth;

var multer = require("multer"); // STORAGE MULTER CONFIG


var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function filename(req, file, cb) {
    cb(null, "".concat(Date.now(), "_").concat(file.originalname));
  },
  fileFilter: function fileFilter(req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== '.jpg' && ext !== '.png' && ext !== '.mp4') {
      return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
    }

    cb(null, true);
  }
});
var upload = multer({
  storage: storage
}).single("file"); //=================================
//             Blog
//=================================
// fieldname: 'file',
// originalname: 'React.png',
// encoding: '7bit',
// mimetype: 'image/png',
// destination: 'uploads/',
// filename: '1573656172282_React.png',
// path: 'uploads/1573656172282_React.png',
// size: 24031 

router.post("/uploadfiles", function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.json({
        success: false,
        err: err
      });
    }

    return res.json({
      success: true,
      url: res.req.file.path,
      fileName: res.req.file.filename
    });
  });
});
router.post("/createPost", function (req, res) {
  var blog = new Blog({
    content: req.body.content,
    writer: req.body.userID
  });
  blog.save(function (err, postInfo) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).json({
      success: true,
      postInfo: postInfo
    });
  }); //생각 해보니  세이브 할떄 populate 할필요가 없다.   가져올떄 하면 되니깐...
  // blog.save((err, response) => {
  //     if (err) return res.json({ success: false, err });
  //     Blog.find({ _id: response._id })
  //         .populate('writer')
  //         .exec((err, result) => {
  //             let postInfo = result[0]
  //             if (err) return res.json({ success: false, err });
  //             return res.status(200).json({ success: true,  postInfo });
  //         })
  // });
});
router.get("/getBlogs", function (req, res) {
  Blog.find().populate("writer").exec(function (err, blogs) {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      success: true,
      blogs: blogs
    });
  });
});
router.post("/getPost", function (req, res) {
  console.log(req.body);
  Blog.findOne({
    "_id": req.body.postId
  }).populate('writer').exec(function (err, post) {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      success: true,
      post: post
    });
  });
});
module.exports = router;