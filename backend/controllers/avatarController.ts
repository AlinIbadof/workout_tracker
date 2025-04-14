import { Request, Response } from "express";
import User from "../models/user.model";

const getUserAvailableAvatars = async (req: Request, res: Response) => {
  try {
    const { username } = req.query;

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { availableAvatars } = user;

    res.status(200).json({ availableAvatars });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const saveUserSelectedAvatar = async (req: Request, res: Response) => {
  try {
    const { username, avatarName } = req.body;

    if (!username || !avatarName) {
      return res
        .status(400)
        .json({ message: "Username and avatarName are required" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    if (!user.availableAvatars.some(avatar => avatar === avatarName)) {
      return res
        .status(400)
        .json({ message: "Avatar not available for this user" });
    }

    user.selectedAvatar = avatarName;
    await user.save();

    res
      .status(200)
      .json({
        message: "Avatar updated successfully",
        selectedAvatar: user.selectedAvatar,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getUserAvailableAvatars, saveUserSelectedAvatar };
