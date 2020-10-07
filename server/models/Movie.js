import mongoose from "mongoose";

const types = mongoose.Schema.Types;

const movieSchema = mongoose.Schema(
  {
    title: {
      type: types.String,
      default: "nonamed",
      trim: true,
      unique: true,
    },
    comments: [
      {
        type: types.ObjectId,
        ref: "MovieComment",
      },
    ],
  },
  { timestamps: true }
);

movieSchema.pre("save", function (next) {
  console.log("Movie save Pre");
  next();
});

movieSchema.methods.printThis = function (cb) {
  const movie = this;
  console.log("printThis", movie);
};

movieSchema.statics.findMoiveByTitle = function (cb) {
  const movie = this;
  console.log("findMoiveByTitle", movie);
};

const Movie = mongoose.model("Movie", movieSchema);

module.exports = { Movie };
