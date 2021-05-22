const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", require("./auth/auth-router"));
// server.use("/api/events", require("./events"));

server.use((err, req, res, next /*eslint-disable-line */) => {
  res.status(err.status).json({
    note: "Houston, We have a problem!!!",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
