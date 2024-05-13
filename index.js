const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3333;

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  console.log("Received Bitbucket payload:", req.body);
  // Aqui você pode processar o payload recebido do Bitbucket
  res.status(200).send("Payload recebido com sucesso!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
