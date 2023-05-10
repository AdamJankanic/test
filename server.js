const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");

app.use(cors());
//
app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("listening on *:3000");
});
