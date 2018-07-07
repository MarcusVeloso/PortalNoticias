module.exports = function (application) {
    application.get('/form_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.noticiasDAO(connection);

        NoticiasDAO.salvarNoticia(noticia, function (erro, result) {
            res.redirect('/noticias');
        });
    });
}