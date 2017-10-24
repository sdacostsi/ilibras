module.exports = function(app) {
    app.get('/api/regiao', function(req, res) {
        var connection = app.models.connectionFactory()
        var regiaoDao = new app.models.RegiaoDao(connection)

        regiaoDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
     });

    app.get('/api/regiao/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var regiaoDao = new app.models.RegiaoDao(connection)

        regiaoDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/regiao/pesquisar', function(req, res) {
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var regiaoDao = new app.models.RegiaoDao(connection)

        regiaoDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.post('/api/regiao/novo', function(req, res){
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var regiao = req.body
        var connection = app.models.connectionFactory()
        var regiaoDao = new app.models.RegiaoDao(connection)

        regiaoDao.salvar(regiao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                regiao.codigo = resultado.insertId
                res.status(200).send(regiao)
            }
        });
    });

    app.delete('/api/regiao/deletar', function(req, res){
        req.assert('codigo').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var regiao = req.body
        var connection = app.models.connectionFactory()
        var regiaoDao = new app.models.RegiaoDao(connection)

        regiaoDao.deletar(regiao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + regiao.codigo)
            }
        });
    });
}