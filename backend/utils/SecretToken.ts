import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const createSecretToken = (id: string) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY || "", {
    expiresIn: 2 * 60 * 5 // 300 seconds for testing purposes
  });
};

export default createSecretToken;
