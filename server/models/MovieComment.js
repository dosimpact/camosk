import mongoose from "mongoose";

const types = mongoose.Schema.Types;

const movieCommentSchema = mongoose.Schema(
  {
    content: {
      type: types.String,
      default: "noComment",
      trim: true,
    },
    movie: {
      type: types.ObjectId,
      required: true,
      ref: "Movie",
    },
    isDeleted: {
      type: types.Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MovieComment = mongoose.model("MovieComment", movieCommentSchema);

module.exports = { MovieComment };
