import express from "express";

const router = express.Router();

//=================================
//             Test
//=================================

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

router.post("/listen", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

module.exports = router;
