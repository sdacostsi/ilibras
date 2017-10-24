module.exports = function(app) {
    app.get('/api/perfil', function(req, res) {
        var connection = app.models.connectionFactory()
        var perfilDao = new app.models.PerfilDao(connection)

        perfilDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
     });

    app.get('/api/perfil/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var perfilDao = new app.models.PerfilDao(connection)

        perfilDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/perfil/pesquisar', function(req, res) {
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var perfilDao = new app.models.PerfilDao(connection)

        perfilDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.post('/api/perfil/novo', function(req, res){
        req.assert('descricao').notEmpty()
        req.assert('codigo_endereco').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var perfil = req.body
        var connection = app.models.connectionFactory()
        var perfilDao = new app.models.PerfilDao(connection)

        perfilDao.salvar(perfil, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                perfil.codigo = resultado.insertId
                res.status(200).send(perfil)
            }
        });
    });

    app.delete('/api/perfil/deletar', function(req, res){
        req.assert('codigo').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var perfil = req.body
        var connection = app.models.connectionFactory()
        var perfilDao = new app.models.PerfilDao(connection)

        perfilDao.deletar(perfil, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + resultado.insertId)
            }
        });
    });
}