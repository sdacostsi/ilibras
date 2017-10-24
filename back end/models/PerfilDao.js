function PerfilDao(connection) {
    this._connection = connection
}

PerfilDao.prototype.listar = function(callback){
    this._connection.query('select codigo_per, descri_per from perfil', callback)
}

PerfilDao.prototype.buscar = function(codigo, callback){
    this._connection.query('select descri_per from perfil where codigo_per = ?', 
        [codigo], callback)
}

PerfilDao.prototype.pesquisar = function(descricao, callback){
    this._connection.query('select codigo_per, descri_per from perfil where descri_per = ?', 
        [descricao], callback)
}

PerfilDao.prototype.salvar = function(perfil, callback){
    this._connection.query('INSERT INTO perfil(descri_per) VALUES (?)', 
        [regiao.descricao], callback)
}

PerfilDao.prototype.deletar = function(perfil, callback){
    this._connection.query('delete from perfil where codigo_per = ?', 
        [perfil.codigo], callback)
}

module.exports = function(){ return PerfilDao; };