import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import avatarRoutes from "./routes/avatar.routes";
import testAuthRoutes from "./routes/testAuth.routes";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(cookieParser());

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectDB();

app.use("/auth", authRoutes);
app.use("/test", testAuthRoutes);
app.use("/avatars", avatarRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
