import { Router } from "express";
import { auth } from "../middleware/auth.middleware.js";
import { create, getMusic } from "../controller/music.controller.js";
import multer from "multer";

const musicRouter = Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

musicRouter.post("/create-music", auth, upload.single("music"), create);
musicRouter.get("/create-music", auth, getMusic);

export default musicRouter;
