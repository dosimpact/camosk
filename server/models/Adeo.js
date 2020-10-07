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
    related_videos: [
      {
        id: String,
        title: String,
        author: String,
        ucid: String,
        author_thumbnail: String,
        short_view_count_text: String,
        view_count: String,
        length_seconds: types.Number,
        video_thumbnail: String,
      },
    ],
    AgeRange10: {
      type: types.Number,
      default: 0,
    },
    AgeRange20: {
      type: types.Number,
      default: 0,
    },
    AgeRange30: {
      type: types.Number,
      default: 0,
    },
    AgeRange40: {
      type: types.Number,
      default: 0,
    },
    AgeRange50: {
      type: types.Number,
      default: 0,
    },
    AgeRange60: {
      type: types.Number,
      default: 0,
    },
    AgeRange70: {
      type: types.Number,
      default: 0,
    },
    AgeRange80: {
      type: types.Number,
      default: 0,
    },

    Male: {
      type: types.Number,
      default: 0,
    },
    Female: {
      type: types.Number,
      default: 0,
    },
    Eyeglasses: {
      type: types.Number,
      default: 0,
    },
    Mustache: {
      type: types.Number,
      default: 0,
    },
    Smile: {
      type: types.Number,
      default: 0,
    },
    Sunglasses: {
      type: types.Number,
      default: 0,
    },
    ANGRY: {
      type: types.Number,
      default: 0,
    },
    HAPPY: {
      type: types.Number,
      default: 0,
    },
    SAD: {
      type: types.Number,
      default: 0,
    },
    CALM: {
      type: types.Number,
      default: 0,
    },
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
