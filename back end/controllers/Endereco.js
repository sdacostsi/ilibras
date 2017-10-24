module.exports = function(app) {
    app.get('/api/endereco', function(req, res) {
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

    app.get('/api/endereco/buscar', function(req, res) {
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

    app.get('/api/endereco/pesquisar', function(req, res) {
        req.assert('logradouro').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var logradouro = req.query.logradouro
        var connection = app.models.connectionFactory()
        var enderecoDao = new app.models.EnderecoDao(connection)

        enderecoDao.pesquisar(logradouro, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.post('/api/endereco/novo', function(req, res){
        req.assert('logradouro').notEmpty()
        req.assert('bairro').notEmpty()
        req.assert('complemento').notEmpty()
        req.assert('cidade').notEmpty()
        req.assert('codigo_estado').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var endereco = req.body
        var connection = app.models.connectionFactory()
        var enderecoDao = new app.models.EnderecoDao(connection)

        enderecoDao.salvar(endereco, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                endereco.codigo = resultado.insertId
                res.status(200).json(endereco)
            }
        });
    });

    app.delete('/api/endereco/deletar', function(req, res){
        req.assert('codigo').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var enderecoDao = new app.models.EnderecoDao(connection)

        enderecoDao.deletar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + resultado.insertId)
            }
        });
    });
}