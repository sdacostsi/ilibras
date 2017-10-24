function LocalizacaoDao(connection) {
    this._connection = connection
}

LocalizacaoDao.prototype.listar = function(callback){
    this._connection.query('select codigo_loc, descri_loc, codend_loc from localizacao', callback)
}

LocalizacaoDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select descri_loc, codend_loc from localizacao where codigo_loc = ?', 
        [codigo], callback)
}

LocalizacaoDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select codigo_loc, descri_loc, codend_loc from localizacao where descri_loc = ?', 
        [descricao], callback)
}

LocalizacaoDao.prototype.salvar = function(localizacao, callback){
    this._connection.query('INSERT INTO localizacao(descri_loc, codend_loc) VALUES (?, ?)', 
        [localizacao.descricao, localizacao.codigo_endereco], callback)
}

LocalizacaoDao.prototype.deletar = function(localizacao, callback){
    this._connection.query('delete from localizacao where codigo_loc = ?', 
        [localizacao.codigo], callback)
}

module.exports = function(){ return LocalizacaoDao; };