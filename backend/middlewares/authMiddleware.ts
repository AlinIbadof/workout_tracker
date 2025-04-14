import User from "../models/user.model";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt, {JsonWebTokenError, JwtPayload } from "jsonwebtoken";

dotenv.config();

const userVerification = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.json({status: false});
  }

  jwt.verify(
    token,
    process.env.TOKEN_KEY || "",
    async (err: JsonWebTokenError | null, data: JwtPayload | string | undefined) => {
      if (err) {
        return res.json({ status: false });
      } else if (data && typeof data !== "string") { 
        const user = await User.findById(data.id); 
        if (user) {
          res.json({
            status: true,
            user: {
              displayName: user.username,
              preferences: user.preferences,
              selectedAvatar: user.selectedAvatar,
            },
          });
          next();
        } else {
          return res.json({ status: false });
        }
      } else {
        return res.json({ status: false });
      }
    }
  );
};

export default userVerification;
