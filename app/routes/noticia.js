module.exports = function (app) {

    app.get('/noticia', function (req, res) {

        var connection = app.config.dbConnection();

        connection.query('SELECT * FROM noticias where id_noticias = 2', function (erro, result) {
            res.render("noticias/noticia", { noticia: result });
        });
    });
}