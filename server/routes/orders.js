const express = require("express");
const router = express.Router();
const { Order } = require("../models/Order");
const { User } = require("../models/User");

router.get("/", (req, res) => {
  Order.find()
    .populate("user")
    .exec((err, orders) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, orders });
    });
});

router.post("/create", (req, res) => {
  let order = new Order({
    content: req.body.content,
    user: req.body.user,
  });
  console.log(req.body);
  order.save((err, orderInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true, orderInfo });
  });
});

router.get("/getorderwithname/:name", (req, res) => {
  User.findOne({ name: req.params?.name }, (err, user) => {
    if (err) return res.json({ success: false, err });

    Order.findOne({ user: user._id })
      .populate("user")
      .exec((err, order) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, order });
      });
  });
});

module.exports = router;
