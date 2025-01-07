process.on("exit", (code) => {
  console.log(
    `El worker con el id ${process.pid} ha finalizado con el código: ${code}`
  );
});

process.on("message", async (message) => {
  console.log(
    `El worker con el id ${process.pid} ha recibido el mensaje: ${message}`
  );

  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await data.json();

  process.send(result);

  process.exit();
});
