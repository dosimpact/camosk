import express from "express";
import { urlencoded, json } from "body-parser";
import cookieParser from "cookie-parser";
import { mongoURI } from "./config/key";
import { connect as _connect } from "mongoose";

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

//==================================
//    MongoDB
//==================================
const connect = _connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✔ MongoDB Connected..."))
  .catch((err) => console.log(err));

const app = express();

//==================================
//    Middle Wares
//==================================
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());

//==================================
//   API
//==================================
app.use("/api/users", require("./routes/users"));
app.use("/api/blog", require("./routes/blog"));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use("/uploads", express.static("uploads"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`✔ Server Running at ${port}`);
});
