module.exports.index = function (app, req, res) {
  const connection = app.config.dbConnection();
  const noticiasModel = new app.app.models.noticiasDAO(connection);

  noticiasModel.getLastFiveNoticies(function (error, result) {
    res.render("home/index", { notices: result });
  });
};
