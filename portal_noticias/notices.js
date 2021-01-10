//! O comando "node <nome do arquivo.js>" executa o arquivo no node

//! Require é uma função js que importa pacotes/bibliotecas
var http = require("http");

//* Criar Servidor
//! req e sending
//? req => requisição, ouve todas as requisições para o servidor ou rota
//? res => resposta, gera a resposta da requisição
var server = http.createServer(function (req, res) {
  //! Atribuindo rota da url no navegador
  var categoria = req.url;

  //! forma raiz de roteamento
  if (categoria === "/tecnologia") {
    res.end("<html><body>Portal de tecnologia </body></html>");
  } else if (categoria === "/moda") {
    res.end("<html><body>Portal de moda </body></html>");
  } else if (categoria === "/beleza") {
    res.end("<html><body>Portal de beleza </body></html>");
  } else {
    res.end("<html><body>Portal de notícias </body></html>");
  }
});

//*Define a porta de saida
server.listen(3000);
