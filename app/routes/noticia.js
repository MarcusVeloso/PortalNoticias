module.exports = function (application) {

    application.get('/noticia', function (req, res) {

        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.noticiasDAO(connection);

        NoticiasDAO.getNoticia(function (erro, result) {
            res.render("noticias/noticia", { noticia: result });
        });
    });
}