// BUILD YOUR SERVER HERE

const express = require("express");
const User = require("./users/model");
const server = express();

server.get("/api/users", (req, res) => {
  // res.json("users");
  User.find()
    .then((users) => {
      // throw new Error("oh no!!!!");
      // console.log(users);
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: "error getting users",
        err: err.message,
        stack: err.stack,
      });
    });
});

server.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
