function EstadoDao(connection) {
    this._connection = connection
}

EstadoDao.prototype.listar = function(callback){
    this._connection.query('select codigo_est, descri_est, abrev_est from estado', callback)
}

EstadoDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select codigo_est, descri_est, abrev_est from estado where codigo_est = ?', 
        [codigo], callback)
}

EstadoDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select codigo_est, descri_est, abrev_est from categoria where descri_est = ?', 
        [descricao], callback)
}

EstadoDao.prototype.pesquisarPorAbrev = function(descricao, callback){
    this._connection.query('select codigo_est, descri_est, abrev_est from categoria where abrev_est = ?', 
        [descricao], callback)
}

module.exports = function(){ return EstadoDao; };