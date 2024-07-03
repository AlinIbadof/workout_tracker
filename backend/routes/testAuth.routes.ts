import express, { Request, Response } from "express";
import userVerification from "../middlewares/authMiddleware";

const router = express.Router();

const getData = async (req: Request, res: Response) => {
  try {
    res.json({ message: "You got data" });
  } catch (error) {
    console.log("error");
    console.error(error);
  }
};
router.get("/getData", userVerification, getData);

export default router;
