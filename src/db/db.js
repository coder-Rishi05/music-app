import mongoose from "mongoose";
import { mongo_url } from "../utils/env.js";

export const connectDb = async () => {
  const connection = await mongoose.connect(mongo_url);
};
