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
      name:title,
      uri: result.url,
      artist: req.user._id,
    });

    return res.status(201).json({ message: "music created sucessfuly", music });
  } catch (error) {
    console.log(error);
    return res.send("server error", error);
  }
};

export const getMusic = async (req, res) => {};
