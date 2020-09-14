"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../models/User"),
    User = _require.User;

var _require2 = require("../middleware/auth"),
    auth = _require2.auth; //=================================
//             User
//=================================


router.get("/auth", auth, function (req, res) {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  });
});
router.post("/register", function (req, res) {
  var user = new User(req.body);
  user.save(function (err, doc) {
    if (err) return res.json({
      success: false,
      err: err
    }); // sendEmail(doc.email, doc.name, null, "welcome");

    return res.status(200).json({
      success: true
    });
  });
});
router.post("/login", function (req, res) {
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (!user) return res.json({
      loginSuccess: false,
      message: "Auth failed, email not found"
    });
    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) return res.json({
        loginSuccess: false,
        message: "Wrong password"
      });
      user.generateToken(function (err, user) {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true
        });
      });
    });
  });
});
router.get("/logout", auth, function (req, res) {
  User.findOneAndUpdate({
    _id: req.user._id
  }, {
    token: "",
    tokenExp: ""
  }, function (err, doc) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).send({
      success: true
    });
  });
});
module.exports = router;