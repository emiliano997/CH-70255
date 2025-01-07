import dotenv from "dotenv";
import { Command } from "commander";

const program = new Command();

program.option("-m, --mode <mode>", "Definir modo del servidor", "dev");

program.parse();

console.log(program.opts());

const { mode } = program.opts();

let path;

switch (mode) {
  case "development":
  case "dev":
    path = ".env.development";
    break;

  case "production":
  case "prod":
    path = ".env.production";
    break;

  default:
    path = ".env";
}

dotenv.config({
  path,
});

export const config = {
  PORT: process.env.PORT || 8080,
  JWT: {
    SECRET: process.env.JWT_SECRET,
    EXPIRATION: process.env.JWT_EXPIRATION,
  },
};
