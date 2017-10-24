module.exports = function(app) {
    app.get('/api/sinal', function(req, res) {
        var connection = app.models.connectionFactory()
        var sinalDao = new app.models.SinalDao(connection)

        sinalDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
     });

    app.get('/api/sinal/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var sinalDao = new app.models.SinalDao(connection)

        sinalDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/sinal/pesquisar', function(req, res) {
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var sinalDao = new app.models.SinalDao(connection)

        sinalDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.post('/api/sinal/novo', function(req, res){
        req.assert('descricao').notEmpty()
        req.assert('confmao').notEmpty()
        req.assert('expressao').notEmpty()
        req.assert('orientacao').notEmpty()
        req.assert('ponto_articulado').notEmpty()
        req.assert('codigo_termo').notEmpty().isInt()
        req.assert('codigo_localizacao').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var sinal = req.body
        var connection = app.models.connectionFactory()
        var sinalDao = new app.models.SinalDao(connection)

        sinalDao.salvar(sinal, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                sinal.codigo = resultado.insertId
                res.status(200).send(sinal)
            }
        });
    });

    app.delete('/api/sinal/deletar', function(req, res){
        req.assert('codigo').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var sinal = req.body
        var connection = app.models.connectionFactory()
        var sinalDao = new app.models.SinalDao(connection)

        sinalDao.deletar(sinal, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + resultado.insertId)
            }
        });
    });
}