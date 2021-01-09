module.exports = function (app) {
  app.get("/formulario_inclusao_noticia", function (req, res) {
    res.render("admin/form_add_noticia", { validation: {}, noticia: {} });
  });

  app.post("/noticias/salvar", function (req, res) {
    const noticias = req.body;

    //! Passamos o campo(Nesse caso o name) que queremos validar e a mensagem do erro
    req.assert("titulo", "Título é obrigatório").notEmpty();
    req.assert("resumo", "Resumo é obrigatório").notEmpty();
    req
      .assert("resumo", "Resumo deve conter entre 10 e 100 caracteres")
      .len(10, 100);
    req.assert("autor", "Autor é obrigatório").notEmpty();
    //! Para além de estar preenchido, tem que ter o formato valido!
    req
      .assert("data_noticia", "Data é obrigatório")
      .notEmpty()
      .isDate({ format: "YYYY-MM-DD" });
    req.assert("noticia", "Notícia é obrigatório").notEmpty();

    //! Verifica se ocorreu algum error na validação.
    const errors = req.validationErrors();

    if (errors) {
      res.render("admin/form_add_noticia", {
        validation: errors,
        noticia: noticias,
      });

      return;
    }

    const connection = app.config.dbConnection();

    const noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.salvarNoticia(noticias, function (error, result) {
      res.redirect("/noticias");
    });
  });
};
