//const dbConnection = require("../../config/dbConnection");

module.exports = function (app) {
  app.get("/noticias", function (req, res) {
    const dbConnection = app.config.dbConnection;

    const connection = dbConnection();
    const noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias( function (error, result) {
      //! O EJS permite enviar dados como segundo parametro e na view identificar os dados.
     
      res.render("noticias/noticias", { noticias: result });
    });

    //! Feita a conexão, podemos realizar consultas/comandos SQL com connection.query()
    //? A função query espera duas coisas, o SQL e uma função de callback: .query(<SQL>, <Função de Callback>)
    /* d, function (error, result) {
      //! O EJS permite enviar dados como segundo parametro e na view identificar os dados.
      res.render("noticias/noticias", { noticias: result });
    }); */
  });
};
