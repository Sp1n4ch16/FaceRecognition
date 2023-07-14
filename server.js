const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);

const view = path.join(__dirname, "views");
app.set("view engine", "hbs");
app.set("views", view);

const modelsPath = path.join(__dirname, "models");
app.use(express.static(modelsPath));
app.use(express.static("src"));
app.use(express.static("CSS"));
app.use(express.static("models"));

app.get("/", (req, res) => {
  res.render("index");
});

server.listen("3000", () => {
  console.log("Port runing on 3000");
});
