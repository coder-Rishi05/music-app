import Album from "../model/album.model.js";
import Music from "../model/model.music.js";
import uploadFile from "../services/storage.service.js";

export const create = async (req, res) => {
  try {
    const { title } = req.body;
    const file = req.file;
    console.log(req.user._id);

    const userRole = req.user.role;

    if (userRole !== "artist") {
      return res
        .status(403)
        .json({ message: "You are not allowed to create music" });
    }

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = await Music.create({
      name: title,
      uri: result.url,
      artist: req.user._id,
    });

    return res.status(201).json({ message: "music created sucessfuly", music });
  } catch (error) {
    console.log(error);
    return res.send("server error", error);
  }
};

export const createAlbum = async (req, res) => {
  console.log(req);
  try {
    const { title, musics } = req.body;

    const album = await Album.create({
      title,
      artist: req.user.id,
      musics: musics,
    });

    return res
      .status(201)
      .json({ message: "Album create successfully", album });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server error" });
  }
};

export const getAllMusics = async (req, res) => {
  const musics = await Music.find().limit(10).populate("artist","name email");

  return res.send(musics);
};
export const getAllAlbums = async (req, res) => {
  const musics = await Album.find().populate("artist","name email");

  return res.send(musics);
};
