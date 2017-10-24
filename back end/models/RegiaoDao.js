function PerfilDao(connection) {
    this._connection = connection
}

PerfilDao.prototype.listar = function(callback){
    this._connection.query('select codigo_reg, descri_reg from regiao', callback)
}

PerfilDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select descri_reg from regiao where codigo_reg = ?', 
        [codigo], callback)
}

PerfilDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select codigo_reg, descri_reg from regiao where descri_reg = ?', 
        [descricao], callback)
}

PerfilDao.prototype.salvar = function(regiao, callback){
    this._connection.query('INSERT INTO regiao(descri_reg) VALUES (?)', 
        [regiao.descricao], callback)
}

PerfilDao.prototype.deletar = function(regiao, callback){
    this._connection.query('delete from regiao where codigo_reg = ?', 
        [regiao.codigo], callback)
}

module.exports = function(){ return PerfilDao; };