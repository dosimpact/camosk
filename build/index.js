"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./env");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _key = require("./config/key");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));
//==================================
//    MongoDB
//==================================
var connect = _mongoose["default"].connect(_key.mongoURI, {
  dbName: "camosk",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(function () {
  return console.log("✔ MongoDB Connected...");
})["catch"](function (err) {
  return console.log(err);
});

var app = (0, _express["default"])(); //==================================
//    Middle Wares
//==================================

app.use((0, _cookieParser["default"])());
app.use((0, _morgan["default"])("dev"));
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"]("public")); //==================================
//   API
//==================================

app.use("/api/users/", require("./routes/users"));
app.use("/api/blog/", require("./routes/blog"));
app.use("/api/video/", require("./routes/video"));
app.use("/api/recommand/", require("./routes/recommand"));
app.use("/api/test/", require("./routes/test"));
app.use("/api/movie/", require("./routes/movie"));
app.use("/api/py/hello/", require("./routes/py/hello")); //use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client

app.use("/uploads", _express["default"]["static"]("uploads"));
app.use("/videos", _express["default"]["static"]("videos")); // Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(_express["default"]["static"]("client/build")); // index.html for all page routes

  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("\u2714 Server Running at http://127.0.0.1:".concat(port));
});