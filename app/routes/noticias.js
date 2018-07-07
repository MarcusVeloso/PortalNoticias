module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.noticiasDAO(connection);

        NoticiasDAO.getNoticias(function (erro, result) {
            res.render("noticias/noticias", { noticias: result });
        });
    });
}