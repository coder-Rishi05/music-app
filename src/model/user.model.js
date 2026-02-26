import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    role: {
      type: String,
      enum: ["artist", "user"],
      default: "user",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("user", userSchema);

export default User;
