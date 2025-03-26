import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";

dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
