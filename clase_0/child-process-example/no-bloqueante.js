import { calculo } from "./calculo.js";

process.on("exit", (code) => {
  console.log(
    `El worker con el id ${process.pid} ha finalizado con el código: ${code}`
  );
});

process.on("message", (message) => {
  console.log(
    `El worker con el id ${process.pid} ha recibido el mensaje: ${message}`
  );

  const sum = calculo();
  process.send(sum);

  process.exit();
});
