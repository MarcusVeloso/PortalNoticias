module.exports = function (application) {

    application.get('/noticia', function (req, res) {

        var connection = application.config.dbConnection();
        var noticiaModel = application.app.models.noticiasModel;

        noticiaModel.getNoticia(connection, function (erro, result) {
            res.render("noticias/noticia", { noticia: result });
        });
    });
}