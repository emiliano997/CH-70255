// Proceso: Ejecución del archivo main.js con node

// console.log(process.cwd()); // Directorio de trabajo actual
// console.log(process.pid); // Identificador del proceso
// console.log(process.memoryUsage()); // Uso de memoria
// console.log(process.env); // Variables de entorno
// console.log(process.env.USER_ID);
// console.log(process.argv); // Argumentos de la línea de comandos
// console.log(process.version); // Versión de Node.js

// const port = process.argv.slice(2)[0];
// console.log(port);

// --------------------------------------
// Commander
// --------------------------------------

import { Command } from "commander";

const program = new Command();

program
  .option("-p, --port <port>", "Definir puerto de nuestro server", 5000)
  .option("-m, --mode <mode>", "Definir modo del servidor", "dev")
  .option("-l, --letters [letters...]", "Definir letras")
  .requiredOption("-u, --user <user>", "Definir el usuario del servidor");

program.parse();

console.log("Options:", program.opts());
console.log("Arguments:", program.args);
