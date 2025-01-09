import express from "express";
import { userRouter } from "./routes/user.routes.js";

const app = express();

app.use("/api/users", userRouter);

app.listen(5000, () => {
  console.log("Server running on port http://localhost:5000");
});
