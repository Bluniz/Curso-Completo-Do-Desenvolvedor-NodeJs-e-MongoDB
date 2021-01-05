const app = require("./config/server");

/* 
  ! Se você estiver importando uma função, ao colocar parenteses ao lado
  ! executará a função de imediato, e como podem ver no exemplo abaixo,
  ! executa e ainda passa um parametro.
*/
//const rotaNoticias = require("./app/routes/noticias")(app);
//const rotaHome = require("./app/routes/home")(app);
//const rotaFormularioInclusaoNoticias = require("./app/routes/noticias")(app);

//const express = require("express");
//? const express = require('express')();
/*
! O Require do express retorna uma função que precisa ser executada
 */
//const app = express();
//! Altera a engine de view do Express e define o modulo que irá substituir!
//app.set('view engine', 'ejs')

//* Este metodo fica escutando requisições em uma determinada porta
app.listen(3000, function () {
  console.log("funfou");
});

/* 
  app.get("/tecnologia", function (req, res) {
  ! Graças ao ejs a responder agora tem a propriedade render!
  ! Passa como parametro o arquivo de view ejs que deseja renderizar!
  ! Como a engine já sabe que esta trabalhando com ejs, não precisa colocar a extensão .ejs
  res.render("secao/tecnologia");
});
 */

//! Nodemon serve para identificar as alterações e reiniciar o servidor
