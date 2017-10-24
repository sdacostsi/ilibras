module.exports = function(app) {
    app.get('/api/termo', function(req, res) {
        var connection = app.models.connectionFactory()
        var termoDao = new app.models.TermoDao(connection)

        termoDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
     });

    app.get('/api/termo/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var termoDao = new app.models.TermoDao(connection)

        termoDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/termo/pesquisar', function(req, res) {
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var termoDao = new app.models.TermoDao(connection)

        termoDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.post('/api/termo/novo', function(req, res){
        req.assert('descricao').notEmpty()
        req.assert('codigo_categoria').notEmpty().isInt()
        req.assert('codigo_termo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var termo = req.body
        var connection = app.models.connectionFactory()
        var termoDao = new app.models.TermoDao(connection)

        termoDao.salvar(termo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                termo.codigo = resultado.insertId
                res.status(200).send(termo)
            }
        });
    });

    app.delete('/api/termo/deletar', function(req, res){
        req.assert('codigo').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var termo = req.body
        var connection = app.models.connectionFactory()
        var termoDao = new app.models.TermoDao(connection)

        termoDao.deletar(termo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + resultado.insertId)
            }
        });
    });
}