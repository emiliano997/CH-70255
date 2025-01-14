import { Router } from "express";

import { ERROR_CODES } from "../common/errors/codes.js";
import { CustomError } from "../common/errors/CustomError.js";
import { ErrorResponses } from "../common/errors/responses.js";

export const userRouter = Router();

const users = [];

userRouter.get("/", (req, res) => {
  res.json({
    status: "success",
    data: users,
  });
});

userRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id)) || Number(id) < 0) {
    CustomError.throwError({
      name: "InvalidParamError",
      message: "The id param must be a number greater than 0",
      code: ERROR_CODES.INVALID_PARAMS,
    });
  }

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    CustomError.throwError({
      name: "NotFoundError",
      message: "User not found",
      cause: ErrorResponses.generateNotFoundResponse({ entity: "User", id }),
      code: ERROR_CODES.NOT_FOUND,
    });
  }

  res.json({
    status: "success",
    data: user,
  });
});

userRouter.post("/", (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    CustomError.throwError({
      name: "UserCreationError",
      cause: ErrorResponses.generateUserErrorResponse({
        firstName,
        lastName,
        email,
      }),
      message: "Error trying to create a user",
      code: ERROR_CODES.INVALID_TYPES_ERROR,
    });
  }

  const user = {
    firstName,
    lastName,
    email,
  };

  if (users.length === 0) {
    user.id = 1;
  } else {
    user.id = users[users.length - 1].id + 1;
  }

  users.push(user);

  res.status(201).json({
    status: "success",
    data: user,
  });
});
