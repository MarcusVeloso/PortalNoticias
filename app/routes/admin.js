module.exports = function (application) {
    application.get('/form_inclusao_noticia', function (req, res) {
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;
        
        req.assert('titulo', 'Título é obrigatório!').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório!').notEmpty();
        req.assert('resumo', 'Resumo deve ter entre 10 e 100 caracteres!').len(10, 100);
        req.assert('autor', 'Autor é obrigatório!').notEmpty();
        req.assert('data_noticias', 'Data é obrigatória!').optional({checkFAlsy: true});
        req.assert('noticias', 'Descrição da noticia é obrigatória!').notEmpty();

        var erros = req.validationErrors();

        if (erros) {            
            res.render("admin/form_add_noticia");
            return;
        }
        
        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.noticiasDAO(connection);

        NoticiasDAO.salvarNoticia(noticia, function (erro, result) {         
            res.redirect('/noticias');            
        });
    });
}