import User from "../models/user.model";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

const userVerification = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ status: false });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(
    token,
    process.env.TOKEN_KEY || "",
    async (err: jwt.JsonWebTokenError | null, data: any) => {
      if (err) {
        return res.json({ status: false });
      } else {
        const user = await User.findById(data.id);
        if (user) {
          res.json({
            status: true,
            user: {
              displayName: user.username,
            },
          });
          next();
        } else {
          return res.json({ status: false });
        }
      }
    }
  );
};

export default userVerification;
