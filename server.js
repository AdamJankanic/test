const express = require("express");
const app = express();

const https = require("https");
const server = https.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("listening on *:" + port);
});
