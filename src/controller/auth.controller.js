import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/env.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(402).json({ message: "All data is necessary" });
    }

    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(402).json({ message: "user already exist" });
    }

    const hashpwd = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashpwd,
    });

    return res.status(201).json({
      message: "Account created sucessfully",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ message: "data required" });
    }

    const user = await User.findOne({ email }).select("+password");
    console.log(user);
    const checkUser = await bcrypt.compare(password, user.password);

    if (!checkUser) {
      return res.status(403).json({ message: "Invalid User acess" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token);

    return res.status(200).json({ message: "User login sucessfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
export const logout = async (req, res) => {
  try {
    res.cookie("token", null);
    res.send("logout sucessfully");
  } catch (error) {
    return res.staus(500).json({ message: "Server error" });
  }
};
