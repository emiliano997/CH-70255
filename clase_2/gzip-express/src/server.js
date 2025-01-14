import express from "express";
import compression from "express-compression";

const app = express();

// Express configuration
app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
);

app.get("/", (req, res) => {
  let string = "";

  for (let i = 0; i < 5e4; i++) {
    string += "Soy un string muy largo ";
  }

  res.send(string);
});

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
