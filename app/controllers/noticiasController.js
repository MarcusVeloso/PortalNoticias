module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.noticiasDAO(connection);

    NoticiasDAO.getNoticias(function (erro, result) {
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.noticiasDAO(connection);

    NoticiasDAO.getNoticia(function (erro, result) {
        res.render("noticias/noticia", { noticia: result });
    });
}