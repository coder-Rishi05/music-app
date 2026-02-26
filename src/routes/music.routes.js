import { Router } from "express";
import { auth } from "../middleware/auth.middleware.js";
import { create,getMusic } from "../controller/music.controller.js";

const musicRouter = Router();

musicRouter.post("/create-music", auth, create);
musicRouter.get("/create-music", auth, getMusic);

export default musicRouter;
