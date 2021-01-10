//! Quando ela for chamada, irá executar a função no seu escopo.
module.exports = function (app) {
  app.get("/", function (req, res) {
    app.app.controllers.home.index(app, req, res);
  });
};
