module.exports = function(app) {
    app.get('/api/estado', function(req, res) {
        var connection = app.models.connectionFactory()
        var estadoDao = new app.models.EstadoDao(connection)

        estadoDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                console.log('JSON: ' + resultado)
                res.status(200).json(resultado)
            }
        });
     });

    app.get('/api/estado/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var estadoDao = new app.models.EstadoDao(connection)

        estadoDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/estado/pesquisar', function(req, res) {
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var estadoDao = new app.models.EstadoDao(connection)

        estadoDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/estado/pesquisarAbrev', function(req, res) {
        req.assert('abreviacao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var estadoDao = new app.models.EstadoDao(connection)

        estadoDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });
}