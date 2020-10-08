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
      },
    ],
    AgeRange00: {
      //https://www.youtube.com/watch?v=hc9CPpfQzWQ
      type: types.Number,
      default: 0,
    },
    AgeRange10: {
      //https://www.youtube.com/watch?v=q7w7H3UMrwQ
      type: types.Number,
      default: 0,
    },
    AgeRange20: {
      //https://www.youtube.com/watch?v=yj9Nkpm61UM
      type: types.Number,
      default: 0,
    },
    AgeRange30: {
      //https://www.youtube.com/watch?v=ao5HHZg3QMk
      type: types.Number,
      default: 0,
    },
    AgeRange40: {
      //https://www.youtube.com/watch?v=Py-BAqWV144
      type: types.Number,
      default: 0,
    },
    AgeRange50: {
      //https://www.youtube.com/watch?v=3-lwEiQ_o2c
      type: types.Number,
      default: 0,
    },
    AgeRange60: {
      //https://www.youtube.com/watch?v=Yvr46lJcIeU
      type: types.Number,
      default: 0,
    },
    AgeRange70: {
      //https://www.youtube.com/watch?v=KFiXvoOVbfQ
      type: types.Number,
      default: 0,
    },
    AgeRange80: {
      //https://www.youtube.com/watch?v=BRPC-nvf8T4
      type: types.Number,
      default: 0,
    },

    Male: {
      //https://www.youtube.com/watch?v=6nxz-x4VsAU
      type: types.Number,
      default: 0,
    },
    Female: {
      //https://www.youtube.com/watch?v=nfNb29zEvbI
      type: types.Number,
      default: 0,
    },
    Eyeglasses: {
      //https://www.youtube.com/watch?v=tEZNK8zBAEk
      type: types.Number,
      default: 0,
    },
    Mustache: {
      //https://www.youtube.com/watch?v=HYozI_eLAV4
      type: types.Number,
      default: 0,
    },
    Smile: {
      //https://www.youtube.com/watch?v=rRDGx05fRzc
      type: types.Number,
      default: 0,
    },
    Sunglasses: {
      //https://www.youtube.com/watch?v=kgyqdC_nHMQ
      type: types.Number,
      default: 0,
    },
    ANGRY: {
      //https://www.youtube.com/watch?v=9NQyBg6nqbk
      type: types.Number,
      default: 0,
    },
    HAPPY: {
      //https://www.youtube.com/watch?v=7_HYO6IaiEY
      type: types.Number,
      default: 0,
    },
    SAD: {
      //https://www.youtube.com/watch?v=RE1q3-mRLoA
      type: types.Number,
      default: 0,
    },
    CALM: {
      //https://www.youtube.com/watch?v=1H7vnXa-Fog
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
