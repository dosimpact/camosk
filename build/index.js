"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _key = require("./config/key");

var _mongoose = require("mongoose");

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));
//==================================
//    MongoDB
//==================================
var connect = (0, _mongoose.connect)(_key.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("✔ MongoDB Connected...");
})["catch"](function (err) {
  return console.log(err);
});
var app = (0, _express["default"])(); //==================================
//    Middle Wares
//==================================

app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _bodyParser.json)());
app.use((0, _cookieParser["default"])()); //==================================
//   API
//==================================

app.use("/api/users", require("./routes/users"));
app.use("/api/blog", require("./routes/blog")); //use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client

app.use("/uploads", _express["default"]["static"]("uploads")); // Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(_express["default"]["static"]("client/build")); // index.html for all page routes

  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("\u2714 Server Running at ".concat(port));
});