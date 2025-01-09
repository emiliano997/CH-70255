import { Router } from "express";
import { userService } from "../services/user.service.js";

export const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
});
