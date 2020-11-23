import express from "express";
import { sendSecretMail } from "../utils/SendGrid";
import { sendSMS } from "../utils/SMS";

const router = express.Router();

//=================================
//             notification
//=================================

router.post("/sns", async (req, res) => {
  const { Message, PhoneNumber } = req.body;
  await sendSMS(Message, PhoneNumber);
  res.status(200).json({
    success: true,
  });
});

router.post("/mail", async (req, res) => {
  const { address, content } = req.body;
  try {
    sendSecretMail(address, content);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({
    success: true,
  });
});

module.exports = router;
