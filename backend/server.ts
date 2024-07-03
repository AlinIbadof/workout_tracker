import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import testAuthRoutes from "./routes/testAuth.routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
