import mongoose from "mongoose";

const musicSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    uri: {
      type: String,
      required: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true },
);

const Music = mongoose.model("music", musicSchema);

export default Music;
