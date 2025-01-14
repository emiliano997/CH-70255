export class CustomError {
  static throwError({ name = "Error", cause, message, code = 1 }) {
    console.log("CustomError.throwError -> code", code);

    const error = new Error(message);
    error.code = code;
    error.name = name;
    error.cause = cause;

    throw error;
  }
}
