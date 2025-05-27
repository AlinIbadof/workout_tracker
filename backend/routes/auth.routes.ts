import express from "express";
import { login, logout, register } from "../controllers/authController";
import userVerification from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verifyToken", userVerification);

export default router;
