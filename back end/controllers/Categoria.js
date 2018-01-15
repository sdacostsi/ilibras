module.exports = function(app) {

    app.get('/api/categoria', function(req, res) {
        var connection = app.models.connectionFactory();
        var categoriaDao = new app.models.CategoriaDao(connection);

        categoriaDao.listar(function(erro, resultado){
            if(erro){
                console.log(erro);
                res.status(500).send(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
     });

    app.get('/api/categoria/buscar', function(req, res) {
        req.assert('codigo').notEmpty().isInt()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var codigo = req.query.codigo
        var connection = app.models.connectionFactory()
        var categoriaDao = new app.models.CategoriaDao(connection)

        categoriaDao.buscar(codigo, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.get('/api/categoria/pesquisar', function(req, res) {
        req.assert('descricao').notEmpty()

        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }
        
        var descricao = req.query.descricao
        var connection = app.models.connectionFactory()
        var categoriaDao = new app.models.CategoriaDao(connection)

        categoriaDao.pesquisar(descricao, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    });

    app.post('/api/categoria/novo', function(req, res){
//    app.get('/api/categoria/novo', function(req, res){

        var poi = {errorQ:"errorQlo"}
        
        console.log("chotoreq.body ********** " + JSON.stringify(req.body));
        console.log("choto ********** " + JSON.stringify(poi));

        console.log(" *********** //// " + req.params)
        console.log("choto" + JSON.stringify(req.params));

        req.assert('descricao').notEmpty()

        //console.log(" *********** " + req.query.descricao)
        console.log("chotoreq.body req.assert ********** " + JSON.stringify(req.body));



        //res.json(req.params)
        //var erros = req.validationErrors()

        
        var erros =  req.getValidationResult()
           .then(function(result){
             console.log(result.array());
           });
        

        if(erros){
            console.log('Erros de validacao encontrados.\n' + JSON.stringify(erros))
            res.status(400).send(erros)
        }

        var categoria = req.params.descricao // req.query.descricao //req.body
        var connection = app.models.connectionFactory()
        var categoriaDao = new app.models.CategoriaDao(connection)

        categoriaDao.salvar(categoria, function(erro, resultado){
            if(erro){
                console.log('CODE DO ERRO: ' + erro.code);
                console.log(erro)
                
                if(erro.code == 'ER_DUP_ENTRY')
                    res.status(409).send(erro)
                else
                    res.status(500).send(erro)
            } else {
                categoria.codigo = resultado.insertId
                res.status(200).send(categoria)
            }
        });
    });

    app.delete('/api/categoria/deletar', function(req, res){
        req.assert('descricao').notEmpty()
        
        var erros = req.validationErrors()

        if(erros){
            console.log('Erros de validacao encontrados.\n' + erros)
            res.status(400).send(erros)
        }

        var categoria = req.body
        var connection = app.models.connectionFactory()
        var categoriaDao = new app.models.CategoriaDao(connection)

        categoriaDao.deletar(categoria, function(erro, resultado){
            if(erro){
                console.log(erro)
                res.status(500).send(erro)
            } else {
                res.status(200).send("Id: " + resultado.insertId)
            }
        });
    });
}