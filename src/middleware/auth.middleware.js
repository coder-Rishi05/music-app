import User from "../model/user.model.js";
import { JWT_SECRET } from "../utils/env.js";
import jwt from "jsonwebtoken";
export const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(404).json({ message: "Not authenticated" });
    }

    const verify = await jwt.verify(token, JWT_SECRET);

    if (!verify) {
      return res.status(403).json({ message: "user not authenticated" });
    }

    const decode = verify;

    const user = await User.findById({ _id: decode.id });
    req.user = user;

    next();
  } catch (error) {
    console.log("server error", error);
    return res.status(500).json({ message: "server error" });
  }
};
