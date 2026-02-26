import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./src/routes/auth.routes.js";
import musicRouter from "./src/routes/music.routes.js";
import multer from "multer";
export const app = express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRouter);
app.use("/api/music", musicRouter);
