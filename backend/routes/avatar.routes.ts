import express from "express";
import {
  getUserAvailableAvatars,
  saveUserSelectedAvatar,
} from "../controllers/avatarController";

const router = express.Router();

router.get("/", getUserAvailableAvatars);
router.post("/", saveUserSelectedAvatar);

export default router;
