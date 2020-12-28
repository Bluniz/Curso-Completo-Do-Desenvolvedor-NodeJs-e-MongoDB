const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");
//Como faz a inclusão no app.js, a rota onde irá setar a nova localização da views
//é apartir da localização do arquivo.

module.exports = app;
