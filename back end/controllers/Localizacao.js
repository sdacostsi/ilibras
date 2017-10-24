module.exports = function(app) {
    app.get('/api/localizacao', function(req, res) {
        var connection = app.models.connectionFactory()
        var enderecoDao = new app.models.EnderecoDao(connection)

        enderecoDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
     });

    app.get('/api/localizacao/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var enderecoDao = new app.models.EnderecoDao(connection)

        enderecoDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/localizacao/pesquisar', function(req, res) {
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var enderecoDao = new app.models.EnderecoDao(connection)

        enderecoDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.post('/api/localizacao/novo', function(req, res){
        req.assert('descricao').notEmpty()
        req.assert('codigo_endereco').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var localizacao = req.body
        var connection = app.models.connectionFactory()
        var enderecoDao = new app.models.EnderecoDao(connection)

        enderecoDao.salvar(localizacao, function(erro, resultado){
            if(erro.code == 'ER_DUP_ENTRY'){
                res.status(409).send(erro)
            } else if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                localizacao.codigo = resultado.insertId
                res.status(200).json(localizacao)
            }
        });
    });

    app.delete('/api/localizacao/deletar', function(req, res){
        req.assert('codigo').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var localizacao = req.body
        var connection = app.models.connectionFactory()
        var enderecoDao = new app.models.EnderecoDao(connection)

        enderecoDao.deletar(localizacao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + resultado.insertId)
            }
        });
    });
}