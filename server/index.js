import "./env";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { mongoURI } from "./config/key";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

//==================================
//    MongoDB
//==================================
const connect = mongoose
  .connect(mongoURI, {
    dbName: "camosk",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("✔ MongoDB Connected..."))
  .catch((err) => console.log(err));

const app = express();

//==================================
//    Middle Wares
//==================================
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//==================================
//   API
//==================================
app.use("/api/users/", require("./routes/users"));
app.use("/api/blog/", require("./routes/blog"));
app.use("/api/video/", require("./routes/video"));
app.use("/api/recommand/", require("./routes/recommand"));
app.use("/api/test/", require("./routes/test"));
app.use("/api/movie/", require("./routes/movie"));
app.use("/api/py/hello/", require("./routes/py/hello"));

app.use("/api/orders/", require("./routes/orders"));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use("/uploads", express.static("uploads"));
app.use("/videos", express.static("videos"));

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
  console.log(`✔ Server Running at http://127.0.0.1:${port}`);
});
