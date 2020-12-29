const dbConnection = require("../../config/dbConnection");

module.exports = function (app) {
  app.get("/noticias", function (req, res) {
    const connection = dbConnection();

    //! Feita a conexão, podemos realizar consultas/comandos SQL com connection.query()
    //? A função query espera duas coisas, o SQL e uma função de callback: .query(<SQL>, <Função de Callback>)
    connection.query("select * from noticias", function (error, result) {
      //! O EJS permite enviar dados como segundo parametro e na view identificar os dados.
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
