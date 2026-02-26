import mongoose from "mongoose";

const albumSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  musics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "music",
    },
  ],
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Album = mongoose.model("album", albumSchema);

export default Album;
