const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from HomePage");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}, your are ${req.query.age} years old`)
})

app.listen(8000, ()=> console.log("Server Started..."))
