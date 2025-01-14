import { ERROR_CODES, ERROR_HTTP_CODES } from "../common/errors/codes.js";
import { ERROR_TYPES } from "../common/errors/types.js";

export function erorrHandler(error, req, res, next) {
  console.log(error.code);

  if (error.code) {
    switch (error.code) {
      case ERROR_CODES.ROUTING_ERROR:
        return res.status(ERROR_HTTP_CODES.USER_ERROR).json({
          status: "error",
          error: error.message,
        });

      case ERROR_CODES.INVALID_TYPES_ERROR:
        return res.status(ERROR_HTTP_CODES.USER_ERROR).json({
          status: "error",
          error: error.message,
          cause: error.cause,
        });

      case ERROR_CODES.INVALID_PARAMS:
        return res.status(ERROR_HTTP_CODES.USER_ERROR).json({
          status: "error",
          error: error.message,
          cause: error.cause,
        });

      case ERROR_CODES.NOT_FOUND:
        return res.status(ERROR_HTTP_CODES.NOT_FOUND).json({
          status: "error",
          error: error.message,
          cause: error.cause,
        });

      default:
        return res.status(ERROR_HTTP_CODES.INTERNAL_SERVER_ERROR).json({
          status: "error",
          error: "Internal server error",
        });
    }
  } else if (error.type) {
    switch (error.type) {
      case ERROR_TYPES.ERROR_ENTITY_PARSE:
        return res.status(ERROR_HTTP_CODES.USER_ERROR).json({
          status: "error",
          error: error.message,
        });
    }
  }
}
