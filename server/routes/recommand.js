import express from "express";
import fs from "fs";

const router = express.Router();

//=================================
//             recommand
//=================================

router.post("/", (req, res) => {
  const { fileName } = req.params;
  console.log(fileName);
  res.status(200).json({
    sucess: true,
    url: "http://localhost:5000/api/video/range/01.mp4",
  });
});

module.exports = router;
