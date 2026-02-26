import User from "../model/user.model.js";
 
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

    const user = await User.create({
      name,
      email,
      password,
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
  } catch (error) {}
};
export const logout = async (req, res) => {
  try {
  } catch (error) {}
};
