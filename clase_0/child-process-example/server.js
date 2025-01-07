import express from "express";
import { calculo } from "./calculo.js";
import { fork } from "child_process";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/bloqueante", (req, res) => {
  const resultado = calculo();
  res.send(`Resultado: ${resultado}`);
});

app.get("/no-bloqueante", (req, res) => {
  const child = fork("./no-bloqueante.js");
  child.send("Por favor, realiza el cálculo");

  child.on("message", (message) => {
    res.json({
      result: `Resultado: ${message}`,
    });
  });
});

app.get("/servicio-externo-bloqueante", (req, res) => {
  setTimeout(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await data.json();

    res.json({
      result,
    });
  }, 5000);
});

app.get("/servicio-externo", (req, res) => {
  const child = fork("./servicio-externo.js");
  child.send("Por favor, realiza la petición");

  child.on("message", (message) => {
    res.json({
      result: `Resultado: ${message}`,
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
