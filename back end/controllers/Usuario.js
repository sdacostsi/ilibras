module.exports = function(app) {
    app.get('/api/usuario', function(req, res) {
        var connection = app.models.connectionFactory()
        var usuarioDao = new app.models.UsuarioDao(connection)

        usuarioDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
     });

    app.get('/api/usuario/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var usuarioDao = new app.models.UsuarioDao(connection)

        usuarioDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/usuario/pesquisar', function(req, res) {
        req.assert('email').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var email = req.query.email
        var connection = app.models.connectionFactory()
        var usuarioDao = new app.models.UsuarioDao(connection)

        usuarioDao.pesquisar(email, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

//Leo

    app.get('/api/usuario/logar', function(req, res) {
        req.assert('email').notEmpty()
        req.assert('senha').notEmpty()

            console.log('senha *****' + req.query.senha)

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var usuario = {
            email: req.query.email,
            senha: req.query.senha
        };

        var connection = app.models.connectionFactory()
        var usuarioDao = new app.models.UsuarioDao(connection)

        usuarioDao.logar(usuario, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });


//Fin Leo



    app.post('/api/usuario/novo', function(req, res){
        req.assert('email').notEmpty().isEmail()
        req.assert('senha').notEmpty().isLength({min:8})
        req.assert('nome').notEmpty()
        req.assert('data_nascimento').notEmpty().isDate()
        req.assert('telefone').notEmpty().isLength({min:10})
        req.assert('codigo_endereco').notEmpty().isInt()
        req.assert('codigo_perfil').notEmpty().isInt()
        req.assert('codigo_foto').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var usuario = req.body
        var connection = app.models.connectionFactory()
        var usuarioDao = new app.models.UsuarioDao(connection)

        usuarioDao.salvar(usuario, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                usuario.codigo = resultado.insertId
                res.status(200).send(usuario)
            }
        });
    });

    app.delete('/api/usuario/deletar', function(req, res){
        req.assert('codigo').notEmpty().isInt()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var usuario = req.body
        var connection = app.models.connectionFactory()
        var usuarioDao = new app.models.UsuarioDao(connection)

        usuarioDao.deletar(usuario, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + resultado.insertId)
            }
        });
    });
}