import { Router } from "express";
import { auth, authUser } from "../middleware/auth.middleware.js";
import {
  create,
  createAlbum,
  getAllMusics,
} from "../controller/music.controller.js";
import multer from "multer";

const musicRouter = Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

musicRouter.post("/create-music", auth, upload.single("music"), create);
musicRouter.post("/album", auth, createAlbum);
musicRouter.get("/getMusic", authUser, getAllMusics);

export default musicRouter;
