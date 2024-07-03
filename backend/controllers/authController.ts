import createSecretToken from "../utils/SecretToken";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ message: "Incorrect username or pass" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect username or pass" });
    }

    const { username: displayName } = user;
    const token = createSecretToken(user._id);

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      token: token,
      displayName: displayName,
    });
    next();
  } catch (error) {
    console.error(error);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const preferences = { theme: "light", locale: "en" };

    const newUser = new User({
      email,
      username,
      password,
      preferences,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error: any) {
    console.error(error.message);
    if (error.code === 11000) {
      if (error.keyPattern.email) {
        return res.json({ message: "Email already exists" });
      } else if (error.keyPattern.username) {
        return res.json({ message: "Username already exists" });
      }
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

export { login, register };