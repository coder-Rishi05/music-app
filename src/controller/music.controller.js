import Music from "../model/model.music.js";

export const create = async (req, res) => {
  try {
    const { name, uri, artist } = req.body;

    const userRole = req.user.role;

    if (userRole !== "artist") {
      return res
        .status(403)
        .json({ message: "You are not allowed to create music" });
    }

    const music = await Music.create({
      name,
      uri,
      artist,
    });

    return res.status(201).json({ message: "music created sucessfuly", music });
  } catch (error) {
    console.log(error);
    return res.send("server error", error);
  }
};

export const getMusic = async (req, res) => {};
