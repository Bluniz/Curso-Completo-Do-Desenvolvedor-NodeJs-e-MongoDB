const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(bodyParser.urlencoded({ extended: true }));

//* Como faz a inclusão no app.js, a rota onde irá setar a nova localização da views
//* é apartir da localização do arquivo.

//! Incluir diretório routes no projeto
//! O consign reconhece todos os arquivos da pasta routes e ai inclui eles dentro do servidor(App)
//! .then() após o include podemos incluir outros arquivos no app, neste caso é necessário apontar a extensão que neste exemplo é .js
//! Quando o consign importa algo de um módulo, ele executa. Portanto se ele importar uma função, automaticamente ele executa essa função.

consign()
  .include("app/routes")
  .then("config/dbConnection.js")
  .then("app/models")
  .into(app);

module.exports = app;
