const express = require("express");
const app = express();

const https = require("https");
const server = https.createServer(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
