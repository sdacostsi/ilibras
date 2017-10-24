function EnderecoDao(connection) {
    this._connection = connection
}

EnderecoDao.prototype.listar = function(callback){
    this._connection.query('select codigo_end, lograd_end, bairro_end, numero_end, comple_end, cidade_end, descri_est from endereco left join estado on codest_end = codigo_est', callback)
}

EnderecoDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select lograd_end, bairro_end, numero_end, comple_end, cidade_end, descri_est from endereco left join estado on codest_end = codigo_est where codigo_end = ?', 
        [codigo], callback)
}

EnderecoDao.prototype.pesquisar = function(logradouro, callback){
    this._connection.query('select codigo_end, lograd_end, bairro_end, numero_end, comple_end, cidade_end, descri_est from endereco left join estado on codest_end = codigo_est where lograd_end = ?', 
        [logradouro], callback)
}

EnderecoDao.prototype.salvar = function(endereco, callback){
    this._connection.query('INSERT INTO endereco(lograd_end, bairro_end, numero_end, comple_end, cidade_end, codest_end) VALUES (?)', 
        [endereco.logradouro, endereco.bairro, endereco.numero, endereco.complemento, endereco.cidade, endereco.codigo_estado], callback)
}

EnderecoDao.prototype.deletar = function(endereco, callback){
    this._connection.query('delete from endereco where codigo_end = ?', 
        [endereco.codigo], callback)
}

module.exports = function(){ return EnderecoDao; };