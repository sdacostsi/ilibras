module.exports = function(app) {
    app.get('/api/tag', function(req, res) {
        var connection = app.models.connectionFactory()
        var tagDao = new app.models.TagDao(connection)

        tagDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
     });

    app.get('/api/tag/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var tagDao = new app.models.TagDao(connection)

        tagDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/tag/pesquisar', function(req, res) {
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var tagDao = new app.models.TagDao(connection)

        tagDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.post('/api/tag/novo', function(req, res){
        req.assert('descricao').notEmpty()
        req.assert('codigo_categoria').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var tag = req.body
        var connection = app.models.connectionFactory()
        var tagDao = new app.models.TagDao(connection)

        tagDao.salvar(tag, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                tag.codigo = resultado.insertId
                res.status(200).send(tag)
            }
        });
    });

    app.delete('/api/tag/deletar', function(req, res){
        req.assert('codigo').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var tag = req.body
        var connection = app.models.connectionFactory()
        var tagDao = new app.models.TagDao(connection)

        tagDao.deletar(tag, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + resultado.insertId)
            }
        });
    });
}