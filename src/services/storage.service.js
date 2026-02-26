import ImageKit from "@imagekit/nodejs";
import { private_key } from "../utils/env.js";

const imagekit = new ImageKit({
  privateKey: private_key,
});

async function uploadFile(file) {
  const result = await imagekit.files.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "myMusic/music",
  });
  return result;
}

export default uploadFile;
