import express from "express";

import { userRouter } from "./routes/user.routes.js";
import { erorrHandler } from "./middlewares/errorHandler.js";

const app = express();

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRouter);
app.use(erorrHandler);

// Server
app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
