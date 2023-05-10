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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on *:" + port);
});
