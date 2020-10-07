import mongoose from "mongoose";

const types = mongoose.Schema.Types;

const AdeoSchema = mongoose.Schema(
  {
    url: {
      type: types.String,
      default: "",
      trim: true,
      unique: true,
    },
    title: {
      type: types.String,
      default: "",
      trim: true,
    },
    shortDescription: {
      type: types.String,
      default: "",
      trim: true,
    },
    thumbnail: {
      type: types.String,
      default: "",
      trim: true,
    },
    author: {
      id: String,
      name: String,
      user: String,
      channel_url: String,
      external_channel_url: String,
      user_url: String,
      avatar: String,
      verified: Boolean,
      subscriber_count: types.Number,
    },
    keywords: [{ type: types.String, default: "", trim: true }],
    related_videos: [{ id: String }],
  },
  { timestamps: true }
);

AdeoSchema.pre("save", function (next) {
  console.log("Adeo save Pre");
  next();
});

AdeoSchema.methods.printThis = function (cb) {
  const Adeo = this;
  console.log("printThis", Adeo);
};

AdeoSchema.statics.findMoiveByTitle = function (cb) {
  const Adeo = this;
  console.log("findMoiveByTitle", Adeo);
};

const Adeo = mongoose.model("Adeo", AdeoSchema);

module.exports = { Adeo };
